import { Injectable } from '@angular/core';
import { ITask } from 'src/app/task/task';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskRespositoryService {

  private url: string = "assets/task.json";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]>
  {
    return this.http.get<ITask[]>(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse)
  {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent)
    {
      errorMessage = `An error ocurred: ${err.error.message}`;
    }
    else
    {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

  addTask(task: ITask)
  {
  }
}
