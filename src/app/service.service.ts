import { inject, Injectable } from '@angular/core';
import { todo } from './components/Model/model';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  http = inject(HttpClient);


  todoItem : Array<todo> = [{
    title : 'groceries',
    id : 0 ,
    userid : 1 ,
    compeleted : false

  }, {
    title : 'car wash',
    id : 1 ,
    userid : 2 ,
    compeleted : false

  } ];


  getTodoApi(){

    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<todo>>(url);

  }

  constructor() { }
}
