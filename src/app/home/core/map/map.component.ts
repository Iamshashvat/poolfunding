import { Component, OnInit } from '@angular/core';
declare var L: any;

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.css' ]
})

export class MapComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
		var map = L.mapquest.map('map', {
			center: [ 19.076, 72.8777 ],
			layers: L.mapquest.tileLayer('map'),
			zoom: 5
		});
		//Mumbai
		L.marker([ 19.076, 72.8777 ], {
			icon: L.mapquest.icons.marker(),
			draggable: false
		})
			.bindPopup('Mumbai, IN')
			.addTo(map);
		L.circle([ 19.076, 72.8777 ], { radius: 100000 }).addTo(map);
		//Kerala
		L.marker([ 10.8505, 76.2711 ], {
			icon: L.mapquest.icons.marker(),
			draggable: false
		})
			.bindPopup('Kerala, IN')
			.addTo(map);
		L.circle([ 10.8505, 76.2711 ], { radius: 100000 }).addTo(map);
		//Chennai
		L.marker([ 13.0827, 80.2707 ], {
			icon: L.mapquest.icons.marker(),
			draggable: false
		})
			.bindPopup('Kerala, IN')
			.addTo(map);
		L.circle([ 13.0827, 80.2707 ], { radius: 100000 }).addTo(map);
	}
}
