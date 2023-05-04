import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SenderInfoService } from 'src/app/services/sender-info.service';
import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(private users: UsersService, private senderInfo: SenderInfoService, private socket: SocketService) {
    setTimeout(() => {

      users.users(this.senderInfo.userid).subscribe((data) => {
        this.user = data;
        this.socket.socket.emit('socketid', {
          socketid: this.socket.socket.id,
          userid: this.senderInfo.userid,
        });
      });
    }, 1000);
  }

  @Input()
  element1: any;
  @Input()
  element2: any;

  @Output()
  receiverId = new EventEmitter<string | null>()

  @Output()
  receiverName = new EventEmitter<string | null>()

  user: any = []

  selectedUser: HTMLDivElement[] = []

  open(user: HTMLDivElement) {
    this.receiverId.emit(user.getAttribute("userid"))
    this.receiverName.emit(user.innerText)

    user.classList.remove("bg-gray-700")
    let element = this.selectedUser.pop()
    element?.classList.remove("bg-gray-500")
    element?.classList.add("bg-gray-700")
    user.classList.add("bg-gray-500")
    this.selectedUser.push(user)
    this.element1.classList.add("translate-y-[100vh]")
    this.element2.classList.add("translate-y-[100vh]")
  }
}
