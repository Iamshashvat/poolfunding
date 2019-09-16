import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EmailService {
	private serverURL = 'google.com';

	constructor(private http: HttpClient) {}

	sendEmail(message) {
		return this.http.post(this.serverURL, message);
	}
}
