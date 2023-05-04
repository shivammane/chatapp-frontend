import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { MessegesComponent } from './messeges/messeges.component';
import { ReceiverInfoComponent } from './receiver-info/receiver-info.component';
import { SenderInfoComponent } from './sender-info/sender-info.component';
import { SendMessegeComponent } from './send-messege/send-messege.component';
import { UserListComponent } from './user-list/user-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatHomeComponent,
    MessegesComponent,
    ReceiverInfoComponent,
    SenderInfoComponent,
    SendMessegeComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class ChatModule { }
