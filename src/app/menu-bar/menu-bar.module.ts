import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
