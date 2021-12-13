import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../payloads/request/user';
import { UserRegistrationService } from '../service/user-registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User({ firstName: "", lastName: "", email: "", password: "" , userRole: "Client"});
  //message:any

  constructor(private registrationService: UserRegistrationService,private router:Router) { }

  ngOnInit(): void {

  }

  public registerNow(){
    this.registrationService.doRegister(this.user).subscribe((data)=>{
      this.router.navigate(['/login']);
    },(error) =>{
      alert("Email already exist")
    });
  }

}
