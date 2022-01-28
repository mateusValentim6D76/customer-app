import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './customers/customer'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private http: HttpClient) { }

   save(customer: Customer) : Observable<Customer>{
    return this.http.post<Customer>('http://localhost:8080/api/customers', customer);
   }
/*
  getCustomers(): Observable<Customer[]>{
    return null
  }
  */

  getCustomers(): Customer[]{
    let c = new Customer();
    c.id = 1;
    c.name = 'Helena'
    c.surname = 'Regina'
    c.cpf = '44455566677'
    c.gender = 'FEMALE'
    c.dthBirthday = '24/08/1967'
    c.registrationDate = '27/01/2022'
    return[c]
  }
}
