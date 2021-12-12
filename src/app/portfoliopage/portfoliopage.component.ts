import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoliopage',
  templateUrl: './portfoliopage.component.html',
  styleUrls: ['./portfoliopage.component.css']
})
export class PortfoliopageComponent implements OnInit {
  isModal:boolean =false;
  constructor() { }

  products = ["MSFT","AAPL","GOOGL,"]
  ngOnInit(): void {
  }

  showModal(){
    this.isModal = true;
  }

  hideModal(){
    this.isModal = false;
  }


}
