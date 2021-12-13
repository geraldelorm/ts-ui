import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../payloads/request/login';
import { UserLoginServiceService } from '../service/user-login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login;
  email:string;
  password:string;

  constructor(private loginService : UserLoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * loginNow
   */
  public loginNow() {
    this.login.email =this.email;
    this.login.password = this.password;

    this.loginService.doLogin(this.login).subscribe((data)=>{
      console.log(data)
        this.router.navigate(['/portfolio'])
    },(error)=>{
        alert("Email/Password incorrect")
    })
  }

}
