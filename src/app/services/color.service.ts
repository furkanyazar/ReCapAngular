import { ResponseModel } from './../models/responseModel';
import { Color } from './../models/color';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44327/api/Colors/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(
      this.apiUrl + 'getall'
    );
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', color);
  }

  getById(colorId: number): Observable<SingleResponseModel<Color>> {
    return this.httpClient.get<SingleResponseModel<Color>>(
      this.apiUrl + 'getbycolorid?colorId=' + colorId
    );
  }

  update(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', color);
  }

  delete(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', color);
  }
}
