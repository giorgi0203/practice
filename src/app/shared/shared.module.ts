import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LayoutComponent, RootComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[LayoutComponent,RootComponent,ReactiveFormsModule]
})
export class SharedModule { }
