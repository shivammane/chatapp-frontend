import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CreateNewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class MainHomeModule { }
