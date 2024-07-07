import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from "../constant/constant";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
}
