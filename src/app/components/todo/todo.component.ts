import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { todo } from '../Model/model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoService = inject(ServiceService);
  todoItems = Array<todo>();
  todoItems2 = Array<todo>();


    ngOnInit(): void {

      console.log(this.todoService.todoItem);


      this.todoItems = this.todoService.todoItem ;
      this.todoService.getTodoApi().pipe(
        catchError((err)=>{
          console.log(err);
          throw err ;


        })
      ).subscribe((todo) =>{

        this.todoItems2 = todo ;

      })



  }




}
