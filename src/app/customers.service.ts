import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './customers/customer'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private http: HttpClient) { 

   }

   save(customer: Customer) : Observable<Customer>{
    return this.http.post<Customer>('http://localhost:8080/api/customers', customer);
   }

  getCustomer(): Customer{
    let customer : Customer = new Customer();
    customer.name = 'Pablo'
    customer.cpf = '444.555.888-23'
    return customer
  }
}
