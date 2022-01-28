import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import {CustomersService} from '../../customers.service'

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {
  customer: Customer;
  success: boolean = false
  errors: String[];

  constructor(
    private service : CustomersService,
    private router : Router
    ) { 
    this.customer = new Customer()
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
    .save(this.customer)
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.customer = response
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    }
    )
  }

  returnListCustomers(){
    this.router.navigate(['/customers-list'])
  }

}
