import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { refreshTokenRequest } from '../payloads/response/login-response';
import { GetPortfolioService } from '../service/get-portfolio.service';
import { UserLoginServiceService } from '../service/user-login-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isPortModal: boolean = false;

  portfolios:any;
  email:string;

  request:refreshTokenRequest = new refreshTokenRequest;

  constructor(private getPortfolioService : GetPortfolioService,private router:Router, private authService:UserLoginServiceService) { }

  ngOnInit(): void {
    this.getPortfolioService.getPortfolios().subscribe((data)=> {
      this.portfolios = data
      console.log(data);
    },(error)=>{
      alert("Error loading porfolios")
      console.log(error);
    })

    this.email = this.authService.retrieveData("email");
  }

  showPortModal(){
    if(this.isPortModal == true){
      this.hidePortModal();
    }
    else{
      this.isPortModal = true;
    }
  }

  hidePortModal(){
    this.isPortModal = false;
  }

  logout(){
    this.request.email = this.authService.retrieveData("email");
    this.request.refreshToken = this.authService.retrieveData("refreshToken");
    this.authService.logout(this.request);
    this.router.navigate(['/login']);
  }

}
