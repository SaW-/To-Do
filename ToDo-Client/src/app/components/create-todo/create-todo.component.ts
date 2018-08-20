import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ApiService } from '../Service/api.service';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  subject;
  comment;
  reminder;
  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>,private apiServices: ApiService) { }

  ngOnInit() {
  }

  addTodo(){
    if(!this.subject || !this.comment){
      alert("Please enter Details")
      return;
    }

      let body = {
        Subject : this.subject,
        comment:this.comment,
        reminder:this.reminder
      };
      
    this.apiServices.createToDo(body).subscribe(
      data => {
        this.dialogRef.close(true);
      },
        error => {
          this.dialogRef.close(false);
          alert("Error");
        }
    );
    
   
  }

}
