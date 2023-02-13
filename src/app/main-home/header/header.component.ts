import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private lin: LoginService) {
    lin.auth().subscribe((data: any) => {
      if (data['valid'] === 'true') {
        User.username = data['name'];
        User.email = data['email'];
        User.userid = data['userid'];

        this.router.navigate(['/', 'users'])
      }
    })
  }

  ngOnInit(): void {
  }

}
