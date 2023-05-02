import { Component, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ITask } from './task/task';

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
  notificationToSend: number = 0;
  receivedTask: ITask | undefined;

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
      this.notificationToSend = 1;
      this.showMessage();
    }

    setTimeout(() =>{
      this.notificationToSend = 0;
    }, 100);

    this.addTaskButton = !this.addTaskButton;
  }

  OnButtonState(event: string): void
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

  searchValue(value: string): void
  {
    this.returnedTask = value;
  }

  receiveTasks(event: ITask): void
  {
    this.receivedTask = event;
    this.changeDetector.detectChanges();
  }
}
