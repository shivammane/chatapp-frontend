import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent {
  receiverId: string | null = ''
  receiverName: string | null = ''
  messege: any = {}
}
