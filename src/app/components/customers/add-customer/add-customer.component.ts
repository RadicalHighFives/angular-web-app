import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.mode';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{
 
  addCustomerequest: Customer = {
    id: '',
    name: '',
    email: '',
    phone: 0
  }
  constructor(private customerService: CustomersService, private router: Router){

  }
  ngOnInit(): void {
  }

  addCustomer(){
    this.customerService.addCustomer(this.addCustomerequest)
    .subscribe({
      next:(customer)=>{
        console.log(customer);
        this.router.navigate(['customers']);
      }

    });
  }
}
