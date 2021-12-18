import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Brand } from './../models/brand';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44327/api/Brands/';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(
      this.apiUrl + 'getall'
    );
  }

  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  getById(brandId: number): Observable<SingleResponseModel<Brand>> {
    return this.httpClient.get<SingleResponseModel<Brand>>(
      this.apiUrl + 'getbybrandid?id=' + brandId
    );
  }

  update(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', brand);
  }
}
