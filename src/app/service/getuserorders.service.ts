import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetuserordersService {

  constructor(private http: HttpClient) { }

  /**
   * getOrders
   */
  public getOrders(){
    return this.http.get("http://ts-order-processing.herokuapp.com/api/v1/order/user")
  }
}
