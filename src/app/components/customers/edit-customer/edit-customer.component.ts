import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.mode';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerDetails: Customer = {
    id: '',
    name: '',
    email: '',
    phone: 0

  };
  
  constructor(private route: ActivatedRoute, private customerService: CustomersService, private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        
        if(id){
          //call api
          this.customerService.getCustomer(id)
          .subscribe({
            next: (response) => {
              this.customerDetails = response;
            }
          });

        }
      
      }
    })
  }

  updateEmployee(){
    this.customerService.updateCustomer(this.customerDetails.id, this.customerDetails)
    .subscribe({

      next: (response) => {
        this.router.navigate(['customers']);
      }
    });
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['customers']);
      }
    })
  }
}
