import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL : string = environment.apiUrlBase + "/api/users"

  constructor( private http: HttpClient ) {  }


 saveUser(user: User) : Observable<any>{
  return this.http.post<any>(this.apiURL, user)
 }
}