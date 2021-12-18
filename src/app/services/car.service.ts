import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44327/api/Cars/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'getcarsdetails'
    );
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'getcarsdetailsbybrandid?brandId=' + brandId
    );
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'getcarsdetailsbycolorid?colorId=' + colorId
    );
  }

  getCarDetails(carId: number): Observable<SingleResponseModel<CarDetail>> {
    return this.httpClient.get<SingleResponseModel<CarDetail>>(
      this.apiUrl + 'getcardetail?carId=' + carId
    );
  }

  getCarsByBrandIdAndColorId(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl +
        'getcarsdetailsbybrandidandcolorid?brandId=' +
        brandId +
        '&colorId=' +
        colorId
    );
  }
}
