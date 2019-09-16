import { Component, OnInit } from '@angular/core';
import { MaterialForm } from 'src/app/interface/material-form.interace';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: [ './add-product.component.css' ]
})
export class AddProductComponent implements OnInit {
	defaultMaterials: MaterialForm = {
		type: 'food',
		quantity: 0
	};

	uid: string;
	users: any;
	$lists;
	q: number;
	formMaterial: {
		type: string;
		quantity: number;
	} = {
		type: 'food',
		quantity: 0
	};

	constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private toast: ToastrService) {}

	ngOnInit() {
		this.$lists = this.db.list(`items`).valueChanges();
	}

	add(type: string, quantity: number) {
		this.uid = this.afAuth.auth.currentUser.uid;
		var objtoPush = {};

		this.db.object(`NGO/${this.uid}/inventory/${type}`).valueChanges().subscribe((doc) => {
			this.q = doc as number;
		});
		quantity = quantity + this.q;
		objtoPush[type] = quantity;
		this.db.object(`NGO/${this.uid}/inventory/`).update(objtoPush).then((res) => {
			console.log(res);
			this.formMaterial.quantity = 0;
			this.formMaterial.type = 'food';
			this.toast.show('Submitted');
		});
	}
}
