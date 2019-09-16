import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
	selector: 'app-cater',
	templateUrl: './cater.component.html',
	styleUrls: [ './cater.component.css' ]
})
export class CaterComponent implements OnInit {
	displayedColumns: string[] = [ 'item', 'quantity', 'received', 'transit' ];
	dataSource: any[] = [];
	currentItem: { quantity: number; item: string } = { quantity: 0, item: 'food' };
	items;

	constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private fbDb: AngularFireDatabase) {
		this.reloadValue();
	}

	reloadValue() {
		this.items = this.fbDb.list('items').valueChanges();
		console.log(this.data);
		this.fbDb.object(`alert/${this.data.id}`).valueChanges().subscribe((res) => {
			this.dataSource = [ ...res['description'] ];
		});
	}

	ngOnInit() {}

	addItem() {
		this.fbDb.list(`alert/${this.data.id}/description`).valueChanges().subscribe((res) => {
			for (let i: number = 0; i < res.length; i++) {
				if (res[i]['item'] == this.currentItem.item) {
					let temp = res[i];
					temp['transit'] += this.currentItem.quantity;
					this.fbDb.object(`alert/${this.data.id}/description/${i}`).update(temp);
				}
			}
		});
	}
}
