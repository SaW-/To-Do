import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { TodoComponent } from './components/todo/todo.component';
import { ApiService } from './components/Service/api.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular5-social-login";




import {
  MatButtonModule, MatCardModule , MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatExpansionModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

const appRoutes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
	      provider: new GoogleLoginProvider("263320784902-69qdosdi2lt8mnlj9ms9gm0dc8e3rdpr.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodoComponent,
    CreateTodoComponent
  ],entryComponents: [
    CreateTodoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SocialLoginModule
  ],
  exports: [
    MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule
  ],
  providers: [
    ApiService,
    {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
