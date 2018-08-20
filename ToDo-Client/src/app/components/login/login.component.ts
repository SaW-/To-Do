import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

import { Router} from '@angular/router';
import { ApiService } from '../Service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private socialAuthService: AuthService, private router: Router,private apiServices: ApiService) { 
    if(localStorage.getItem('user'))
      this.router.navigate(['/todo']);
  }

  ngOnInit() {
    
  }

  public register() {
    this.router.navigate(['/register']);
  }

  public login() {
    
    if(!this.email || !this.password){
      alert("Please enter Details")
      return;
    }
    var body = {
      email : this.email,
      password:this.password,
      provider: "email"
    };
    
    this.signIn(body);
  }

  public socialSignIn() {
    
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        
        var body = {
          email : userData.email,
          name:userData.name,
          provider: "gPlus",
          googleId: userData.id
        };
        this.signIn(body);
      }
    )
    .catch(err=>{
      console.log("error while loging in with G+: ",err);
    })
  }

  signIn(body){
    this.apiServices.signIn(body).subscribe(
      data => {
        this.goToToDo(data)
        },
        error => {
          alert(JSON.stringify(error.error.error));
        }
    );
  }

  goToToDo(userData){
    localStorage.setItem('user', JSON.stringify(userData));
    this.router.navigate(['/todo']);
  }

}
