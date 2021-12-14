import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTransactionService {

  constructor(private http: HttpClient) { }

  /**
   * addTransaction
   */
  public addTransaction(transaction) {
    return  this.http.post("http://ts-order-processing.herokuapp.com/api/v1/order/create/12", transaction)
  }
}
