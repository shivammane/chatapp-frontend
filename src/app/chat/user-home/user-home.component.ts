import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { User } from 'src/app/class/user';
import { MessegesService } from 'src/app/services/messeges.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  // header part
  name = User.username;
  email = User.email;
  userid = User.userid;
  //other users data
  user: any = [];
  receiverid: string = '';
  receiverName: string = '';
  //messeges
  // messeges:any = [
  //   { sender: this.userid, messege: 'hi' },
  //   { sender: 'other', messege: 'hello' },
  //   { sender: this.userid, messege: 'how are you' },
  //   { sender: 'other', messege: 'fine' },
  // ];
  messeges: any = [];

  socket = io('http://127.0.0.1:5000/');
  constructor(private users: UsersService, private msgs: MessegesService) {
    users.users(User.userid).subscribe((data) => {
      this.user = data;
      this.socket.on('connect', () => {
        this.socket.emit('socketid', {
          socketid: this.socket.id,
          userid: User.userid,
        });
      });
    });
    this.socket.on('receivemsg', (data) => {
      // let j = data['messege'];
      // let k = j.split('\n');
      // console.log(k);
      let da = JSON.parse(data);
      if (da['userid'] == this.receiverid) {
        this.messeges.push({
          sender: da['userid'], // this sender return the id of other senders id
          messege: da['messege'],
        });
      }
    });
  }

  connect(text: string) {
    let split = text.split('\n');
    this.receiverid = split[1];
    this.receiverName = split[0];
    this.msgs.getMesseges(this.userid, this.receiverid).subscribe((data) => {
      this.messeges = data;
    });
  }

  sendmsg(data: any) {
    this.messeges.push({ sender: this.userid, messege: data['msg'] });
    this.socket.emit('messege', {
      userid: User.userid,
      messege: data['msg'],
      receiverid: this.receiverid,
    });
    (<HTMLInputElement>document.getElementById('area')).value = '';
  }

  ngOnInit(): void {}
}
