import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { UsersComponent } from './users/users.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MessegesComponent } from './messeges/messeges.component';
import { SubmitMsgComponent } from './submit-msg/submit-msg.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserHomeComponent,
    MessegesComponent,
    SubmitMsgComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, FormsModule],
  exports: [UsersComponent],
})
export class ChatModule {}
