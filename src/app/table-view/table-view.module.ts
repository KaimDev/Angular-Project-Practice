import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { TableModule } from 'primeng/table';
import { TaskRespositoryService } from '../service/task-respository.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule
  ],
  exports: [
    TableViewComponent
  ],
  providers: [TaskRespositoryService]
})
export class TableViewModule { }
