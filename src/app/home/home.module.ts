import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AlertComponent } from './alert/alert.component';
import { AddProductComponent } from './core/add-product/add-product.component';
import { MapComponent } from './core/map/map.component';
import { InventoryComponent } from './core/inventory/inventory.component';
import { TrackProcessComponent } from './core/track-process/track-process.component';
import { GeneralRequestComponent } from './core/general-request/general-request.component';
import { MainComponent } from './core/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapboxComponent } from './core/map/mapbox/mapbox.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CaterComponent } from './ui-element/cater/cater.component';
import { SendComponent } from './core/map/send/send.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTransitComponent } from './ui-element/view-transit/view-transit.component';

@NgModule({
	declarations: [
		HomeComponent,
		AlertComponent,
		AddProductComponent,
		MapComponent,
		InventoryComponent,
		TrackProcessComponent,
		GeneralRequestComponent,
		MainComponent,
		CaterComponent,
		MapboxComponent,
		SendComponent,
		ViewTransitComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
		AngularFireModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatTableModule,
		ChartsModule,
		MatSelectModule,
		MatBottomSheetModule,
		HttpClientModule
	],
	entryComponents: [ CaterComponent, ViewTransitComponent ]
})
export class HomeModule {}
