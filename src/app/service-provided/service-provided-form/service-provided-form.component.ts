import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from 'src/app/customers/customer';
import {} from '../../customers.service'
import { ServiceProvided } from '../serviceProvided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  customers: Customer[] = []
  service: ServiceProvided;
  constructor(private customerService: CustomersService) { 
    this.service = new ServiceProvided();
  }

  ngOnInit(): void {
    this.customerService 
      .getCustomers()
      .subscribe (response => this.customers = response);
  }

  onSubmit(){
    console.log(this.service)
  }

}
