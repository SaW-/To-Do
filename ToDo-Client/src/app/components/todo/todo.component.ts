import { CreateTodoComponent } from './../create-todo/create-todo.component';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ApiService } from '../Service/api.service';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  

  user:any = {};

  toDos;

  constructor(private router: Router, private dialog: MatDialog,private apiServices: ApiService) {
    this.checkLogIn();
    this.loadTodo();
  }

  ngOnInit() {
  }

  loadTodo() {
    this.apiServices.listToDo().subscribe(
      data => {
        this.toDos = data;
      },
        error => {
          console.log(error)
          alert("Error");
        }
    );
  }

  checkLogIn(){
    if(localStorage.getItem("user") === null){
      this.router.navigate(['/']);
    }else{
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  addTodo(){
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.loadTodo();
    });
  }

  delete(todo){
    this.apiServices.deleteToDo(todo.id).subscribe(
      data => {
        this.loadTodo();
      },
        error => {
          console.log(error)
          alert("Error");
        }
    );
  }

  update(todo){
    var body = {
      Subject : todo.Subject,
      comment:todo.comment,
      reminder:todo.reminder
    };
    this.apiServices.updateToDo(todo.id,body).subscribe(
      data => {
        this.loadTodo();
      },
        error => {
          console.log(error)
          alert("Error");
        }
    );
  }
}
