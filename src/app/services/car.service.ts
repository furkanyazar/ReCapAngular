import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44327/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsdetails';

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailsbybrandid?brandId=' + brandId;

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailsbycolorid?colorId=' + colorId;

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails(carId: number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetail?carId=' + carId;

    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
