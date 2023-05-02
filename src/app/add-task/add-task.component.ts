import { Component, EventEmitter, Input, Output } from '@angular/core';

import { v4 as uuidv4, v4 } from 'uuid';

import { ITask } from '../task/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent
{
  @Input() hidden: boolean = false;
  @Input() saveTask: boolean = false;
  @Input() receivedNotification: number | undefined;

  @Output() ButtonState: EventEmitter<string> = new EventEmitter();
  @Output() newTask: EventEmitter<ITask> = new EventEmitter();

  kindButtonState =
  {
    save:   "Save Task",
    new:    "New Task",
    cancel: "Cancel Task"
  }

  //ngModel to input
  inputText: string = "";

  //Detects when the input field is being entered
  OnChanged(event: Event): void
  {
    const inputValue = (event.target as HTMLInputElement).value;

    if (!inputValue.length)
    {
      this.ButtonState.emit(this.kindButtonState.cancel);
    }
    else
    {
      this.ButtonState.emit(this.kindButtonState.save);
    }
  }

  //Detects when the Inputs is being changed.
  ngOnChanges(): void
  {
    if (this.hidden)
    {
      this.ButtonState.emit(this.kindButtonState.cancel);
    }
    else
    {
      this.ButtonState.emit(this.kindButtonState.new);
    }

    if (this.receivedNotification)
    {
      const tempTask: ITask =
      {
        id: v4(),
        name: this.inputText,
        state: false
      }
      this.newTask.emit(tempTask);
    }
    else
    {
      this.newTask.emit(undefined);
    }

    //Save Task
    if (this.saveTask)
    {
      this.inputText = "";
    }
  }

  //To clear the input field
  clear(): void
  {
    this.inputText = "";
    this.ButtonState.emit(this.kindButtonState.cancel);
  }
}
