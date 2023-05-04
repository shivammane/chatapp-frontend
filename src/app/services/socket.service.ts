import { Injectable } from '@angular/core';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket = io('http://127.0.0.1:5000/');
  constructor() { }
}
