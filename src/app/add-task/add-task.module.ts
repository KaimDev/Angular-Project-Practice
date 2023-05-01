import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    AddTaskComponent
  ]
})
export class AddTaskModule { }
