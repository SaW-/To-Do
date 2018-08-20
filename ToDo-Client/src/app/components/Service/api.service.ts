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
 
    signIn(data) {
        return this.http.post(this.rootURL+'/user/signin',data);
    }

    signUp(data) {
        return this.http.post(this.rootURL+'/user/signup',data);
    }
}