import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {CustomersService} from '../../customers.service'

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {
  customer: Customer;

  constructor(private service : CustomersService) { 
    this.customer = new Customer()
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.customer)
    .subscribe(response => {
      console.log(response);
    })
  }

}
