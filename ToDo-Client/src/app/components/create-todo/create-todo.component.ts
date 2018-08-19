import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>) { }

  ngOnInit() {
  }

  addTodo(){
    console.log("add todo clicked!")
    this.dialogRef.close({
      title: "test title",
      description : "some test description",
      date: new Date()
    });
  }

}
