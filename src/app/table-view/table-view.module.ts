import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TableViewComponent
  ]
})
export class TableViewModule { }
