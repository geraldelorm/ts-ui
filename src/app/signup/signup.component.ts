import { Component, OnInit } from '@angular/core';
import { User } from '../payloads/user';
import { UserRegistrationService } from '../service/user-registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User({ firstName: "", lastName: "", email: "", password: "" , userRole: "Client"});
  //message:any

  constructor(private registrationService: UserRegistrationService) { }

  ngOnInit(): void {

  }

  public registerNow(){
    let res = this.registrationService.doRegister(this.user);
    res.subscribe((data) => console.log(data))
    
  }

}
