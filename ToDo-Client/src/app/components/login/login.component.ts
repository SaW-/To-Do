import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private router: Router) { 
    if(localStorage.getItem('user'))
      this.router.navigate(['/todo']);
  }

  ngOnInit() {
    
  }

  public socialSignIn() {
    
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log(" sign in data : " , userData);
        // Now sign-in with userData
        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigate(['/todo']);
      }
    )
    .catch(err=>{
      console.log("error while loging in with G+: ",err);
    })
  }

}
