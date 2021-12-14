import { Component, OnInit } from '@angular/core';
import { GetPortfolioService } from '../service/get-portfolio.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isPortModal: boolean = false;

  portfolios:any

  constructor(private getPortfolioService : GetPortfolioService) { }

  ngOnInit(): void {
    this.getPortfolioService.getPortfolios().subscribe((data)=> {
      this.portfolios = data
      console.log(data);
    },(error)=>{
      alert("Error loading porfolios")
      console.log(error);
    })
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

}
