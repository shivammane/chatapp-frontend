import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { SenderInfoService } from 'src/app/services/sender-info.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-send-messege',
  templateUrl: './send-messege.component.html',
  styleUrls: ['./send-messege.component.css']
})
export class SendMessegeComponent {

  constructor(private socket: SocketService, private senderInfo: SenderInfoService) { }

  emojiIcon = faFaceSmile
  clipIcon = faPaperclip
  sendIcon = faPaperPlane

  @Input()
  receiverId: string | null = ''

  @Output()
  messege = new EventEmitter<any>()

  sendmsg(data: HTMLDivElement) {
    let msg = data.innerText

    if (this.receiverId != '') {
      this.messege.emit({ sender: this.senderInfo.userid, messege: msg });
      this.socket.socket.emit('messege', {
        userid: this.senderInfo.userid,
        messege: msg,
        receiverid: this.receiverId,
      });
    }
    data.innerText = ''
  }
}
