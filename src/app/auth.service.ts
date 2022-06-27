import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './login/user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL : string = environment.apiUrlBase + "/api/users";
  tokenURL : string = environment.apiUrlBase + environment.getTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor( private http: HttpClient ) {  }

  isAuthenticated() : boolean{
    return false;
  }

 saveUser(user: User) : Observable<any>{
  return this.http.post<any>(this.apiURL, user)
 }

 tryLogin(username: string, password: string): Observable<any>{
  const params = new HttpParams() 
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
  
  const headers = {
    'Authorization' : 'Basic '  + btoa(`${this.clientId}:${this.clientSecret}`),
    'Content-Type' : 'application/x-www-form-urlencoded'
  }
  return this.http.post(this.tokenURL, params.toString() , { headers })
 }
}