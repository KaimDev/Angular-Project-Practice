import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent
{
  @Input() hidden: boolean = false;
  @Input() saveTask: boolean = false;

  @Output() ButtonState: EventEmitter<string> = new EventEmitter();

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

    if (inputValue.length == 0)
    {
      this.ButtonState.emit(this.kindButtonState.cancel);
    }
    else if (inputValue.length > 0)
    {
      this.ButtonState.emit(this.kindButtonState.save);
    }

    console.log(this.inputText);
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
