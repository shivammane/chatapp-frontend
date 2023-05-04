import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessegesService } from 'src/app/services/messeges.service';
import { SenderInfoService } from 'src/app/services/sender-info.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-messeges',
  templateUrl: './messeges.component.html',
  styleUrls: ['./messeges.component.css']
})
export class MessegesComponent implements OnChanges, OnInit {
  constructor(private msgs: MessegesService, private senderInfo: SenderInfoService, private socket: SocketService) {

  }

  @Input()
  receiverId: string | null = ''
  @Input()
  messege: any = {}

  senderId = this.senderInfo.userid

  private count = 0

  messeges: any = []

  connect() {
    this.msgs.getMesseges(this.senderInfo.userid, this.receiverId).subscribe((data) => {
      this.messeges = data;
    });
  }

  ngOnInit(): void {
    this.socket.socket.on('receivemsg', (da) => {
      if (da['userid'] == this.receiverId) {
        this.messeges.push({
          sender: da['userid'], // this sender return the id of other senders id
          messege: da['messege'],
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.count++
    this.messeges.push(this.messege)
    if (this.count > 1) {
      this.connect()
    }
  }
}
