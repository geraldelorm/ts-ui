import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegister(user){
      return this.http.post("http://localhost:8083/api/v1/auth/signup", user, {responseType: 'arraybuffer'})
  }
}
 