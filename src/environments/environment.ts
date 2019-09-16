// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
		apiKey: 'AIzaSyAEOwKnM9tqAIZT7rGO2zBomXifTHBYziE',
		authDomain: 'teksystem-hackathon.firebaseapp.com',
		databaseURL: 'https://teksystem-hackathon.firebaseio.com',

		projectId: 'teksystem-hackathon',
		storageBucket: '',
		messagingSenderId: '1030562055942',
		appId: '1:1030562055942:web:dbb73b1c20d3453b'
	},
  mapbox: {
    accesssToken: 'pk.eyJ1IjoiYXl1c2gtbWFoYWphbiIsImEiOiJjanptcmt4cTIwNnY5M25ueTN2NHZsNHdlIn0.pmHv4q5SGzgsIZMBJ_N_5A'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
