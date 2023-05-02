import { Component, Input } from '@angular/core';
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
  task_array: ITask[] = []; // Initialize an array of tasks that will be displayed
  database: ITask[] = []; // Initialize an array of tasks that will be used as the database
  @Input() inputTask: string = ""; // Receive a search string from another component
  @Input() receiveTask: ITask | undefined;

  constructor(private task_repository: TaskRespositoryService) {}

  ngOnInit(): void
  {
    this.task_repository.getTasks().subscribe({
      next: (tasks: ITask[]) => this.database = tasks,
      complete: () => this.task_array = this.database
    })
  }

  // Method to be executed when a checkbox is clicked
  onCheckboxChange(id: string): void
  {
    const new_task: ITask | undefined = this.task_array.find((t) => t.id == id);

    if (new_task)
    {
      const index_table: number = this.task_array.indexOf(new_task!);
      this.task_array[index_table].state = !this.task_array[index_table].state;

      const index_db = this.database.indexOf(new_task);
      new_task.state = !new_task.state;
      this.database[index_db] = new_task;
    }
  }

  ngOnChanges(): void
  {
    if (this.inputTask.length)
    {
      this.inputTask = this.inputTask.toLocaleLowerCase();

      this.task_array = this.database.filter((task: ITask) =>
      task.name.toLocaleLowerCase().includes(this.inputTask));
    }
    else
    {
      this.task_array = this.database;
    }

    if (this.receiveTask != undefined)
    {
      this.database.push(this.receiveTask);
      // this.udpateViewTable();
    }
  }

  udpateViewTable(): void
  {
    this.task_array = this.database;
  }
}
