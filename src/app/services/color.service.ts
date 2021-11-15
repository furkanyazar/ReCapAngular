import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44327/api/Colors/getall';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
