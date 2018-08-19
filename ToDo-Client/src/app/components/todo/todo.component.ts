import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  user:any = {};

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
