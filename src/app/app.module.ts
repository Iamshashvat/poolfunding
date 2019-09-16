import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SummaryComponent } from './disaster/summary/summary.component';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
// const firebaseConfig = {
//   apiKey: 'AIzaSyAEOwKnM9tqAIZT7rGO2zBomXifTHBYziE',
//   authDomain: 'teksystem-hackathon.firebaseapp.com',
//   databaseURL: 'https://teksystem-hackathon.firebaseio.com',
//   projectId: 'teksystem-hackathon',
//   storageBucket: '',
//   messagingSenderId: '1030562055942',
//   appId: '1:1030562055942:web:dbb73b1c20d3453b'
// };

@NgModule({
	declarations: [ AppComponent, LoginComponent, SummaryComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		FormsModule,
		ReactiveFormsModule,
		MatSnackBarModule,
		ToastrModule.forRoot(),
		AngularFireDatabaseModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
