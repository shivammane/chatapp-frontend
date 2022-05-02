import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    CreateNewComponent,
    HomeBodyComponent,
  ],
  imports: [CommonModule, MainHomeRoutingModule, FormsModule],
  exports: [HeaderComponent],
})
export class MainHomeModule {}
