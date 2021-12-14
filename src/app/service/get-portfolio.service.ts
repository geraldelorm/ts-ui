import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from '../payloads/request/portfolio';
import { portfolioResponse } from '../payloads/response/portfolio-response';

@Injectable({
  providedIn: 'root',
})
export class GetPortfolioService {
  constructor(private http: HttpClient) {}

  /**
   * getPortfolios
   */
  public getPortfolios() {
    return this.http.get<Array<portfolioResponse>>('https://ts-order-processing.herokuapp.com/api/v1/portfolio/user');
  }

}
