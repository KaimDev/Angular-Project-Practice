import { Component } from '@angular/core';
import { TaskRespositoryService } from 'src/app/service/task-respository.service';
import { ITask } from '../task/task';


@Component(
  {
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.scss']
  }
)
export class TableViewComponent
{
  task_array: ITask[] = [];

  constructor(private task_repository: TaskRespositoryService) {}

  ngOnInit(): void
  {
    this.task_repository.getTasks().subscribe({
      next: (tasks: ITask[]) => this.task_array = tasks,
      complete: () => console.log("Finish")
    })
  }
}
