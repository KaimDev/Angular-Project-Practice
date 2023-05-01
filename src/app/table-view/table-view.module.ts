import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { TableModule } from 'primeng/table';
import { TaskRespositoryService } from '../service/task-respository.service';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    CheckboxModule,
    FormsModule
  ],
  exports: [
    TableViewComponent
  ],
  providers: [TaskRespositoryService]
})
export class TableViewModule { }
