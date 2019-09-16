import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeoJson } from '../interface/map';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
	providedIn: 'root'
})
export class MapboxService {
	constructor(private db: AngularFireDatabase) {
		// mapboxgl[accessToken] = environment.mapbox.accesssToken;
	}

	removeMarker($key: string) {
		return this.db.object('/markers/' + $key).remove();
	}
}
