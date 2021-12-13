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
      return this.http.post("http://localhost:8083/api/v1/portfolio/create", portfolio)
  }
}
