import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 


@Injectable()
export class ApiService {
    readonly rootURL = "http://localhost:3000/api/v1";
    constructor(private http:HttpClient) {}
 
    getToken(){
        return JSON.parse(localStorage.getItem('user')).token;
    }
    
    signIn(data) {
        return this.http.post(this.rootURL+'/user/signin',data);
    }

    signUp(data) {
        return this.http.post(this.rootURL+'/user/signup',data);
    }

    listToDo() {
        return this.http.get(this.rootURL+'/to-do/',
        {
            headers: new HttpHeaders({
              'Authorization': 'Bearer '+this.getToken()
            })
          }
        );
    }

    createToDo(toDo) {
        return this.http.post(this.rootURL+'/to-do/',toDo,
        {
            headers: new HttpHeaders({
              'Authorization': 'Bearer '+this.getToken()
            })
          }
        );
    }

    updateToDo(id,toDo) {
        return this.http.put(this.rootURL+'/to-do/'+id,toDo,
        {
            headers: new HttpHeaders({
              'Authorization': 'Bearer '+this.getToken()
            })
          }
        );
    }

    deleteToDo(id) {
        return this.http.delete(this.rootURL+'/to-do/'+id,
        {
            headers: new HttpHeaders({
              'Authorization': 'Bearer '+this.getToken()
            })
          }
        );
    }
}