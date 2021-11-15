import { CustomerResponseModel } from './../models/customerResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44327/api/Customers/getall';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
