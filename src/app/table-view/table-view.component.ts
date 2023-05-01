import { Component, EventEmitter } from '@angular/core';
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

  onCheckboxChange(id: number): void
  {
    const new_task: ITask | undefined = this.task_array.find((t) => t.id == id);

    if (new_task)
    {
      const index = this.task_array.indexOf(new_task);
      new_task.state = !new_task.state;
      this.task_array[index] = new_task;
    }
  }
}
