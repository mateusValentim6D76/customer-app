import { Injectable } from '@angular/core';
import {Customer} from './customers/customer'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getCustomer(): Customer{
    let customer : Customer = new Customer();
    customer.name = 'Pablo'
    customer.cpf = '444.555.888-23'
    return customer
  }
}
