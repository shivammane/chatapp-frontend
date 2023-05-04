import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessegesService {
  constructor(private http: HttpClient) { }
  getMesseges(sender: any, receiver: any) {
    return this.http.post('http://localhost:5000/messeges', {
      sender: sender,
      receiver: receiver,
    });
  }
}
