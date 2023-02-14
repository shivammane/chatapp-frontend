import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private lin: LoginService) {

  }
  login(info: any) {
    this.lin.lin(info).subscribe((data: any) => {
      if (data[0]['email'] == info['email']) {
        this.router.navigate(['/', 'users'])
      } else {
        alert('incorrect email or password');
      }
    });
  }
  ngOnInit(): void { }
}
