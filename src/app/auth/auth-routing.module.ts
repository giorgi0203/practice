import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from '@shared/root/root.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "",
    component: RootComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
