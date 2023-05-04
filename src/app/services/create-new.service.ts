import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateNewService {
  constructor(private http: HttpClient) { }
  create(data: any) {
    return this.http.post('http://localhost:5000/createNew', data);
  }
}
