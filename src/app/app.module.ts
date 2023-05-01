import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarModule } from "./menu-bar/menu-bar.module";
import { TableViewModule } from './table-view/table-view.module';
import { AddTaskModule } from './add-task/add-task.module';
import { TaskRespositoryService } from './service/task-respository.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
      MessageService,
      TaskRespositoryService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        BrowserAnimationsModule,
        MenuBarModule,
        TableViewModule,
        AddTaskModule,
        ToastModule,
    ]
})
export class AppModule { }
