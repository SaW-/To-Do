import { CreateTodoComponent } from './../create-todo/create-todo.component';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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

  constructor(private router: Router, private dialog: MatDialog) {
    this.checkLogIn();
  }

  ngOnInit() {
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
      console.log('The dialog was closed ,result : ',result);
      // this.animal = result;
    });
  }
}
