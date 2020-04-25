import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from '@shared/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateChildRouteGuardService } from '@core/services/can-activate-child-route-guard.service';
import { CanActivateRouteGuardService } from '@core/services/can-activate-route-guard.service';


const routes: Routes = [
  {
    path: "",
    component: RootComponent,
    canActivateChild: [CanActivateChildRouteGuardService],
    canActivate: [CanActivateRouteGuardService],
    children: [
      {
        path: "",
        loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
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
