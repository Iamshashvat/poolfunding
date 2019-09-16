import { Component, OnInit, OnDestroy } from '@angular/core';
import 'typed.js';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
declare var Typed: any;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit, OnDestroy {
	loginForm: FormGroup;
	isComponentActive: boolean = true;

	constructor(
		public afAuth: AngularFireAuth,
		private _fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private router: Router,
		private afDb: AngularFireDatabase
	) {}

	ngOnInit() {
		this.afAuth.authState.pipe(takeWhile(() => this.isComponentActive)).subscribe((res) => {
			if (res) this.router.navigate([ '' ]);
		});

		this.loginForm = this._fb.group({
			email: [
				'',
				[ Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required ]
			],
			password: [ '', [ Validators.minLength(5), Validators.required ] ]
		});
		let options = {
			strings: [ 'Donate.', 'Help.', 'Make things better.' ],
			typeSpeed: 100,
			backSpeed: 100,
			showCursor: true,
			cursorChar: '|',
			loop: true
		};
		new Typed('.typing-element', options);
	}

	ngOnDestroy() {
		this.isComponentActive = false;
	}

	login() {
		this.afAuth.auth
			.signInWithEmailAndPassword(this.loginForm.value['email'], this.loginForm.value['password'])
			.then(
				(res) => {
					this.afDb.object(`users/${res.user.uid}`).valueChanges().subscribe((res) => {
						localStorage.setItem('userType', res.toString());
						this.router.navigate([ '' ]);
					});
				},
				(err) => {
					this._snackBar.open(err.message, 'Retry', { duration: 2000, verticalPosition: 'top' });
				}
			);
	}

	isEmailInvalid(): boolean {
		return this.loginForm.get('email').valid;
	}

	isPasswordValid(): boolean {
		return this.loginForm.get('password').valid;
	}
}
