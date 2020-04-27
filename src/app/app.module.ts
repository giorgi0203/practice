import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
