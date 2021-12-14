import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { RefreshTokenPayload } from '../payloads/request/login';
import { LoginResponse } from '../payloads/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {
  refreshTokenPayload: RefreshTokenPayload = new RefreshTokenPayload;


  constructor(private http: HttpClient, private localStorage:LocalStorageService) { }

  public doLogin(login){
    return this.http.post<LoginResponse>("http://ts-order-processing.herokuapp.com/api/v1/auth/login", login).pipe(
      map((data) => {
        this.localStorage.store(
          'bearer',
          data.authenticationToken
        );
        this.localStorage.store('email', data.email);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        this.localStorage.store('userrole', data.userRole);
        this.localStorage.store('userid', data.userId);
        return true;
      })
    );
  }


  getUserAuthToken(){
    return this.localStorage.retrieve('bearer');
  }


  refreshToken() {
    this.refreshTokenPayload.email = this.localStorage.retrieve('email');
    this.refreshTokenPayload.refreshToken = this.localStorage.retrieve('refreshToken');
    return this.http
      .post<LoginResponse>(
        `http://ts-order-processing.herokuapp.com/api/v1/auth/refresh/token`,
        this.refreshTokenPayload
      )
      .pipe(
        tap((response) => {
          this.localStorage.clear('authenticationToken');
          this.localStorage.clear('expiresAt');

          this.localStorage.store(
            'authenticationToken',
            response.authenticationToken
          );
          this.localStorage.store('expiresAt', response.expiresAt);
        })
      );
  }

}
