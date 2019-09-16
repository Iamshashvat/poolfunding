import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, NavigationEnd } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CaterComponent } from '../ui-element/cater/cater.component';
import { EmailService } from 'src/app/services/email.service';
import { ViewTransitComponent } from '../ui-element/view-transit/view-transit.component';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: [ './alert.component.css' ]
})
export class AlertComponent implements OnInit {
	constructor(
		private afAuth: AngularFireAuth,
		private _db: AngularFireDatabase,
		private _router: Router,
		private _bottomSheet: MatBottomSheet,
		private mailer: EmailService
	) {}
	alerts: { 'id': string; 'location': string }[] = [];
	$userType;
	shouldShow: boolean = false;
	isNgo: boolean;
	ngOnInit() {
		this._router.events.subscribe((res) => {
			if (res instanceof NavigationEnd) {
				if (res.url == '/track') this.shouldShow = true;
			}
		});
		this.$userType = this._db.object(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
		this.$userType.subscribe((res) => {
			this.isNgo = res == 'ngo';
		});
		this._db.object('alert').valueChanges().subscribe((res) => {
			var lat = this._db.list('POC').valueChanges().subscribe((res) => {
				this.alerts = [];
				res.forEach((element) => {
					Object.keys(element['alert']).forEach((ele) => {
						this.alerts.push({ id: element['alert'][ele], location: element['location'] });
					});
					lat.unsubscribe();
					console.log(this.alerts);
				});
			});
		});
	}

	logout() {
		this.afAuth.auth.signOut().then((res) => {
			this._router.navigate([ '/login' ]);
		});
	}

	email(index) {
		this.mailer.sendEmail(`this email was sent by ${index}`).subscribe((res) => {
			console.log(res);
		});
	}

	cater(index) {
		this._bottomSheet.open(CaterComponent, { data: this.alerts[index] });
	}

	view(index) {
		this._bottomSheet.open(ViewTransitComponent, { data: this.alerts[index] });
	}
}
