import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.mode';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})

export class CustomersListComponent implements OnInit{


  customers: Customer[] = []

  constructor(private customerService: CustomersService){}

  ngOnInit(): void {
    this.customerService.getAllCustomers()
    .subscribe({
      next: (customers) => {
        this.customers = customers;      
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
