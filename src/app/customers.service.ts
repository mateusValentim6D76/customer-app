import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './customers/customer'
import {environment} from '../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiURL: String = environment.apiUrlBase + '/api/customers'

  constructor( private http: HttpClient) { }

   save(customer: Customer) : Observable<Customer>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.post<Customer>(`${this.apiURL}`, customer, { headers });
   }

   update(customer: Customer) : Observable<any>{
    return this.http.put<Customer>(`${this.apiURL}/${customer.id}`, customer);
   }

  getCustomers(): Observable<Customer[]>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.get<Customer[]>(`${this.apiURL}`, { headers })
  }  

  getCustomerById(id: number) : Observable<Customer>{
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  delete(customer: Customer) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${customer.id}`)
  }
}
