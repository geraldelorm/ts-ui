import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverResponse } from '../payloads/response/order-response';

@Injectable({
  providedIn: 'root'
})
export class GetuserordersService {

  constructor(private http: HttpClient) { }

  /**
   * getOrders
   */
  public getOrders(){
    return this.http.get<serverResponse>("https://ts-order-processing.herokuapp.com/api/v1/order/user")
  }
}
