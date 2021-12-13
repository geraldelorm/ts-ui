import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Portfolio } from '../payloads/request/portfolio';
import { CreatePortfolioService } from '../service/create-portfolio.service';

@Component({
  selector: 'app-portfoliomodal',
  templateUrl: './portfoliomodal.component.html',
  styleUrls: ['./portfoliomodal.component.css']
})
export class PortfoliomodalComponent implements OnInit {
  @Input() isPortModal:boolean = false;

  portfolio:Portfolio = new Portfolio
  name: string
  description: string

  constructor(private addPortfolioService: CreatePortfolioService, private router:Router) { }

  ngOnInit(): void {
  }

  hidePortModal(){
    this.isPortModal = false;
  }

  /**
   * addPortfolio
   */
  public addPortfolio() {
    this.portfolio.name = this.name;
    this.portfolio.description = this.description;

    this.addPortfolioService.addPortfolio(this.portfolio).subscribe((data)=>{
      console.log(data)
      //this.router.navigate(['/portfolio'])
      window.location.reload();
    },(error)=>{
      alert("Portfolio not created")
    })
  }
}

