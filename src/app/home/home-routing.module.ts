import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { AddProductComponent } from './core/add-product/add-product.component';
import { MapComponent } from './core/map/map.component';
import { InventoryComponent } from './core/inventory/inventory.component';
import { GeneralRequestComponent } from './core/general-request/general-request.component';
import { TrackProcessComponent } from './core/track-process/track-process.component';
import { MainComponent } from './core/main/main.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'add', component: AddProductComponent },
    { path: 'map', component: MapComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'request', component: GeneralRequestComponent },
    { path: 'track', component: TrackProcessComponent },
    { path: '', component: TrackProcessComponent }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
