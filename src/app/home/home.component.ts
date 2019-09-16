import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { User } from '../interface/users.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	currentUserId: string;
	users: any;
	$userType;

	isNgo: boolean;

	constructor(private router: Router, private _db: AngularFireDatabase, private afAuth: AngularFireAuth) {
		this.$userType = this._db.object(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
		this.$userType.subscribe((res) => {
			this.isNgo = res == 'ngo';

			if(this.isNgo === true){
				this.router.navigateByUrl('map');
			}
		});
	}

	ngOnInit() {}

	logout() {
		this.afAuth.auth.signOut().then((res) => {
			this.router.navigate([ '/login' ]);
			localStorage.clear();
		});
	}

	changeTab(option) {
		switch (option) {
			case 'ADD_PRODUCT':
				this.router.navigate([ '/add' ]);
				break;
			case 'ADD_ITEMS':
				this.router.navigate([ '/inventory' ]);
				break;
			case 'ORDER':
				this.router.navigate([ '/track' ]);
				break;
			case 'ACTIVE_ORDER':
				this.router.navigate([ '/request' ]);
				break;
			case 'SHOW_MAP':
				this.router.navigate([ '/map' ]);
				break;
			case 'DASHBOARD':
				this.router.navigate([ '' ]);
				break;
		}
	}
}
