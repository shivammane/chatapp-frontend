import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }
  auth() {
    return this.http.get("http://localhost:5000/login", { withCredentials: true })
  }
  lin(data: any) {
    return this.http.post('http://localhost:5000/login', data, { withCredentials: true });
  }
}
