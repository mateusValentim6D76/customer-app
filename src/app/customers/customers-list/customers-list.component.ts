import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import {CustomersService} from '../../customers.service'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(
    private service:CustomersService,
    private router: Router
    ) {}
   

  ngOnInit(): void {
    this.service
    .getCustomers()
    .subscribe( response => this.customers = response);
  }

  newRegistry(){
    this.router.navigate(['/customers-form'])
  }
}
