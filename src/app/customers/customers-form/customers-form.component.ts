import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
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
  id : number

  constructor(
    private service : CustomersService,
    private router : Router,
    private activatedRoute: ActivatedRoute
    ) { 
    this.customer = new Customer()
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params  
    if(params && params._value && params._value.id){
      this.id = params._value.id;
      this.service
      .getCustomerById(this.id)
      .subscribe(
        response => this.customer = response,
        errorResponse => this.customer = new Customer()
      )
    }
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
