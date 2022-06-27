import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './login/user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL : string = environment.apiUrlBase + "/api/users";
  tokenURL : string = environment.apiUrlBase + environment.getTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper : JwtHelperService = new JwtHelperService();

  constructor( private http: HttpClient ) {  }

obterToken(){
  const tokenString = localStorage.getItem('access_token')
  if(tokenString){
    const token = JSON.parse(tokenString).access_token
    return token;
  }
  return null;
}

  isAuthenticated() : boolean{
    const token = this.obterToken();
    if (token){
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired;
    }
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