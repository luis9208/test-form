import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string;
  constructor(private http: HttpClient) {
    this.api = environment.host || '';

  }

  login(data: JSON) {
    const url = this.api.concat('login');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers });
  }

  register(data: JSON) {
    const url = this.api.concat('register');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers });
  }
}
