import { Component, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pagetitle = 'AngularProject';
  addTaskButton: boolean = false;
  saveTask = false;
  ButtonState: string = "New Task";
  styleName: string = "";
  returnedTask: string = "";

  constructor(private changeDetector: ChangeDetectorRef,
              private messageService: MessageService) {}

  showMessage()
  {
    this.messageService.add({key:'AddedTask' ,severity:'success', summary:'Success', detail:'Added Task'});
  }

  AddTaskButtonHandle(): void
  {
    if (this.ButtonState === "Save Task")
    {
      this.saveTask = true;
      this.showMessage();
    }

    this.addTaskButton = !this.addTaskButton;
  }

  OnButtonState(event: string)
  {
    this.ButtonState = event;

    if (event === "New Task")
    {
      this.styleName = "p-button-raised";
    }
    else if (event === "Cancel Task")
    {
      this.styleName = "p-button-danger"
    }
    else if (event === "Save Task")
    {
      this.styleName = "p-button-success";
    }

    this.changeDetector.detectChanges();
  }

  searchValue(value: string)
  {
    this.returnedTask = value;
  }
}
