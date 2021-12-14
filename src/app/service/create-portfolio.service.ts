import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePortfolioService {

  constructor(private http: HttpClient) { }

  /**
   * addPortfolio
   */
  public addPortfolio(portfolio) {
      return this.http.post("http://ts-order-processing.herokuapp.com/api/v1/portfolio/create", portfolio)
  }
}
