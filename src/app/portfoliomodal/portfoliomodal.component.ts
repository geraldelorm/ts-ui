import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfoliomodal',
  templateUrl: './portfoliomodal.component.html',
  styleUrls: ['./portfoliomodal.component.css']
})
export class PortfoliomodalComponent implements OnInit {
  @Input() isPortModal:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  hidePortModal(){
    this.isPortModal = false;
  }
}

