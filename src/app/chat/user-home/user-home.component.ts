import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { MessegesService } from 'src/app/services/messeges.service';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  // header part
  name = '';
  email = '';
  userid = '';
  //other users data
  user: any = [];
  receiverid: string = '';
  receiverName: string = '';
  messeges: any = [];

  socket = io('http://127.0.0.1:5000/');
  selectedUser: HTMLDivElement[] = []
  constructor(private users: UsersService, private msgs: MessegesService, private router: Router, private lin: LoginService) {
    lin.auth().subscribe((data: any) => {
      if (data['valid'] === 'true') {
        this.name = data['name'];
        this.email = data['email'];
        this.userid = data['userid'];

        users.users(this.userid).subscribe((data) => {
          this.user = data;
          setTimeout(() => {
            this.socket.emit('socketid', {
              socketid: this.socket.id,
              userid: this.userid,
            });
          }, 1000);
          this.status = 'online'
        });
      } else {
        router.navigate(['home', 'login'])
      }
    })

    this.socket.on('receivemsg', (da) => {
      // console.log(da);
      // let da = JSON.parse(data);

      if (da['userid'] == this.receiverid) {
        this.messeges.push({
          sender: da['userid'], // this sender return the id of other senders id
          messege: da['messege'],
        });
      }
    });

    this.socket.on("disconnect", () => {
      this.status = 'offline'
    });
  }
  status = ''
  connect(text: string) {
    let split = text.split('\n');
    this.receiverid = split[1];
    this.receiverName = split[0];
    this.msgs.getMesseges(this.userid, this.receiverid).subscribe((data) => {
      this.messeges = data;
    });
  }

  sendmsg(data: any) {
    if (this.receiverid != '') {
      this.messeges.push({ sender: this.userid, messege: data['msg'] });
      this.socket.emit('messege', {
        userid: this.userid,
        messege: data['msg'],
        receiverid: this.receiverid,
      });
    }
    (<HTMLInputElement>document.getElementById('area')).value = '';
  }

  logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.router.navigate(["home", "login"])
  }

  selected(element: HTMLDivElement) {
    this.selectedUser.pop()?.classList.remove("selecteduser")
    this.selectedUser.push(element)
    this.selectedUser[0].classList.add('selecteduser')
  }
  ngOnInit(): void { }
}
