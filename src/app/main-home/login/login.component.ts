import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private lin: LoginService) {}
  login(info: any) {
    this.lin.lin(info).subscribe((data: any) => {
      if (data[0]['email'] == info['email']) {
        User.username = data[0]['name'];
        User.email = data[0]['email'];
        User.userid = data[0]['userid'];

        this.router.navigate(['/', 'users']).then(
          (nav) => {
            console.log(nav); // true if navigation is successful
          },
          (err) => {
            console.log(err); // when there's an error
          }
        );
      } else {
        alert('incorrect email or password');
      }
    });
  }
  ngOnInit(): void {}
}
