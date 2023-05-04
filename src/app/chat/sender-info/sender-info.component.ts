import { Component, Input } from '@angular/core';
import { faEllipsisVertical, faMessage, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { SenderInfoService } from 'src/app/services/sender-info.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-sender-info',
  templateUrl: './sender-info.component.html',
  styleUrls: ['./sender-info.component.css']
})
export class SenderInfoComponent {

  senderName = 'name'

  @Input()
  status = ''

  threeDotMenuIcon = faEllipsisVertical
  messegeIcon = faMessage
  communityIcon = faUsersLine
  circleIcon = faCircle

  constructor(private router: Router, private lin: LoginService, private senderInfo: SenderInfoService, private socket: SocketService) {

    lin.auth().subscribe((data: any) => {
      if (data['valid'] === 'true') {
        this.senderInfo.name = data['name'];
        this.senderInfo.email = data['email'];
        this.senderInfo.userid = data['userid'];
        this.senderName = senderInfo.name
      } else {
        router.navigate(['home', 'login'])
      }
    })

    this.socket.socket.on("disconnect", () => {
      this.status = 'offline'
    });

    this.socket.socket.on('connect', () => {
      this.status = 'online'
    })
  }

  logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.router.navigate(["home", "login"])
  }
}
