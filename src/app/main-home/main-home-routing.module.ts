import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [
    // { path: '', component: HomeBodyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'createNew', component: CreateNewComponent },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainHomeRoutingModule { }
