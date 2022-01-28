import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {CustomersService} from '../../customers.service'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private service:CustomersService) {
    
   }

  ngOnInit(): void {
    this.customers = this.service.getCustomers();
  }

}
