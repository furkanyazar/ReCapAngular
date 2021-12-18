import { CartItem } from 'src/app/models/cartItem';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44327/api/Rentals/';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      this.apiUrl + 'getrentalsdetails'
    );
  }

  getAll(): Observable<ListResponseModel<Rent>> {
    return this.httpClient.get<ListResponseModel<Rent>>(this.apiUrl + 'getall');
  }

  rentCar(cartItem: CartItem) {
    return this.httpClient.post(this.apiUrl + 'add', {
      rentalId: 0,
      carId: cartItem.carDetail.carId,
      customerId: 1,
      rentDate: cartItem.rentDate.toISOString(),
      returnDate: cartItem.returnDate.toISOString(),
    });
  }
}
