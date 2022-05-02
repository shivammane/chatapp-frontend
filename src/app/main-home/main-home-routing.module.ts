import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: BodyComponent,
    children: [
      { path: '', component: HomeBodyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'createNew', component: CreateNewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHomeRoutingModule {}
