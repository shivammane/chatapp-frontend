import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SenderInfoService } from 'src/app/services/sender-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private lin: LoginService, private senderInfo: SenderInfoService) {

  }
  login(info: any) {
    this.lin.lin(info).subscribe({
      next: (data: any) => {
        if (data[0]['email'] == info['email']) {
          this.router.navigate(['/', 'chat'])
        } else {
          alert('incorrect email or password');
        }
      }, error: () => {
        alert("please try again after some time")
      }
    });
  }
}
