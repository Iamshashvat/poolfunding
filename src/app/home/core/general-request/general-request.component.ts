import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { Toast, ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-general-request',
	templateUrl: './general-request.component.html',
	styleUrls: [ './general-request.component.css' ]
})
export class GeneralRequestComponent implements OnInit {
	items: Observable<any[]>;
	currentItem: {
		'item': string;
		'quantity': number;
	} = {
		item: 'rice',
		quantity: 2
	};
	itemsToRequest: {
		'item': string;
		'quantity': number;
	}[] = [];

	datasource;
	displayedColumns: string[] = [ 'item', 'quantity', 'delete' ];
	authUID: string;

	constructor(private db: AngularFireDatabase, private auth: AngularFireAuth, private toast: ToastrService) {
		this.items = this.db.list('items').valueChanges();
		this.auth.authState.subscribe((res) => {
			this.authUID = res.uid;
		});
	}
	ngOnInit() {}

	addItem() {
		var itemFound: boolean = false;
		for (let i: number = 0; i < this.itemsToRequest.length; i++) {
			if (this.itemsToRequest[i].item === this.currentItem.item) {
				itemFound = true;
				this.itemsToRequest[i].quantity = this.itemsToRequest[i].quantity + this.currentItem.quantity;
			}
		}
		if (!itemFound) {
			let tempObject = {
				item: this.currentItem.item,
				quantity: this.currentItem.quantity,
				received: 0,
				transit: 0
			};
			this.itemsToRequest = [ ...this.itemsToRequest, tempObject ];
		}

		this.datasource = new MatTableDataSource(this.itemsToRequest);
	}

	delete(index) {
		this.itemsToRequest.splice(index, 1);
		this.datasource = new MatTableDataSource(this.itemsToRequest);
	}

	submitRequest() {
		console.log('submitting');
		this.db
			.list('alert')
			.push({
				cateredBy: null,
				createdBy: this.authUID,
				description: this.itemsToRequest,
				resolved: false,
				status: 'requested'
			})
			.then((res) => {
				this.db.list(`POC/${this.authUID}/alert`).push(res.key).then((res) => {
					this.toast.show('Sucessfully generated request');
				});
			});
	}
}
