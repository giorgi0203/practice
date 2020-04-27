import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, RootComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[LayoutComponent,RootComponent,ReactiveFormsModule]
})
export class SharedModule { }
