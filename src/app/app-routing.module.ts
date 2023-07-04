import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent 
  },
  {
    path: 'employees',
    component: EmployeesListComponent 
  },
  {
    path: 'customers',
    component: CustomersListComponent 
  },
  {
    path: 'customers/add',
    component: AddCustomerComponent 
  },
  {
    path: 'customers/edit/:id',
    component: EditCustomerComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
