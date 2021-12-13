import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPortfolioService {

  constructor(private http: HttpClient) { }

  /**
   * getPortfolios
   */
  public getPortfolios() {
    return this.http.get("http://localhost:8083/api/v1/portfolio")
  }
}
