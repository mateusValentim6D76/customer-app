import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from 'src/app/customers/customer';
import {} from '../../customers.service'
import { ServiceProvided } from '../serviceProvided';
import {ServiceProvidedService} from '../../service-provided.service'

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  success: boolean = false
  errors: String[];
  customers: Customer[] = []
  service: ServiceProvided;
  constructor(
    private customerService: CustomersService, private serviceProvidedService: ServiceProvidedService)
     { 
    this.service = new ServiceProvided();
  }

  ngOnInit(): void {
    this.customerService 
      .getCustomers()
      .subscribe (response => this.customers = response);
  }

  onSubmit(){
    this.serviceProvidedService
      .save(this.service)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.service = new ServiceProvided();
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
