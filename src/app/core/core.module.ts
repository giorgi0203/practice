import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivateChildRouteGuardService } from './services/can-activate-child-route-guard.service';
import { CanActivateRouteGuardService } from './services/can-activate-route-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[CanActivateChildRouteGuardService,
    CanActivateRouteGuardService]
})
export class CoreModule { }
