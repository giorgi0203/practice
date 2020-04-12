import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { MainComponent } from './containers/main/main.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';

@NgModule({
  declarations: [MainComponent, LandingNavbarComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
