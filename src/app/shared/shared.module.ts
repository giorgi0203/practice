import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [LayoutComponent, RootComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[LayoutComponent,RootComponent]
})
export class SharedModule { }
