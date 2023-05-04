import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CreateNewService } from 'src/app/services/create-new.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {
  constructor(private create: CreateNewService, private router: Router) { }
  invalidMsg = ''
  cancleIcon = faXmark
  close() {
    this.invalidMsg = ''
  }
  creat(info: any) {
    if (info.password !== info.comfirmpassword) {
      this.invalidMsg = 'confirm password again'
      return
    } else if (info.email == '' || info.password == '' || info.firstname == '' || info.lastname == '') {
      this.invalidMsg = 'fill all fields'
      return
    }
    this.invalidMsg = ''
    this.create.create(info).subscribe({
      next: (data: any) => {
        if (data.toString() == 'true') {
          alert('account created successfully');
          alert('please try to log in');
          this.router.navigate(['home', 'login']);
        } else {
          alert('email address already used');
        }
      }, error: () => { alert('please try again after some time') }
    })
  }
}
