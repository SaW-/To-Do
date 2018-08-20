import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

import { Router} from '@angular/router';
import { ApiService } from '../Service/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email;
  password;
  name;

  constructor(private socialAuthService: AuthService, private router: Router,private apiServices: ApiService) { 
    
  }

  ngOnInit() {
    
  }
  public back() {
    this.router.navigate(['/']);
  }

  public register() {
    
    if(!this.email || !this.password|| !this.name){
      alert("Please enter Details")
      return;
    }
    var body = {
      email : this.email,
      password:this.password,
      name:this.name,
      provider: "email"
    };
    
    this.apiServices.signUp(body).subscribe(
      data => {
        alert("Success");
        this.router.navigate(['/']);
        },
        error => {
          alert(JSON.stringify(error.error.error));
        }
    );
  }

 

}
