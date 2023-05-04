import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuIcon = faBars
  cancleIcon = faXmark
  menuOption = faBars

  open(menu: HTMLDivElement) {
    menu.classList.toggle("-translate-y-[50vh]")
    this.menuOption = this.menuOption == this.menuIcon ? this.cancleIcon : this.menuIcon
  }

  constructor(private router: Router, private lin: LoginService) {
    lin.auth().subscribe((data: any) => {
      if (data['valid'] === 'true') {
        this.router.navigate(['/', 'chat'])
      }
    })
  }

}
