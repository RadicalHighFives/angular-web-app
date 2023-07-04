import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.mode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {


  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseApiUrl + '/api/Customer');
  }

  addCustomer(addCustomerequest: Customer): Observable<Customer>{
    addCustomerequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Customer>(this.baseApiUrl + '/api/Customer', addCustomerequest);
  }

  getCustomer(id: string): Observable<Customer>{
    return this.http.get<Customer>(this.baseApiUrl + '/api/Customer/' + id);
  }

  updateCustomer(id: string, updateCustomerRequest: Customer): Observable<Customer>{

    return this.http.put<Customer>(this.baseApiUrl + '/api/Customer/' + id, updateCustomerRequest);

  }

  deleteCustomer(id: string): Observable<Customer>{

    return this.http.delete<Customer>(this.baseApiUrl + '/api/Customer/' + id);
  }
}
