import { Component, OnInit } from '@angular/core';
import { CreateNewService } from 'src/app/services/create-new.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
})
export class CreateNewComponent implements OnInit {
  constructor(private create: CreateNewService, private router: Router) {}
  creat(info: any) {
    this.create.create(info).subscribe((data: any) => {
      if (data.toString() == 'true') {
        alert('account created successfully');
        alert('please try to log in');
        this.router.navigate(['home', 'login']);
      } else {
        alert('please try again');
      }
    });
  }
  ngOnInit(): void {}
}
