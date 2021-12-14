import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Portfolio } from '../payloads/request/portfolio';
import { Transaction } from '../payloads/request/transaction';
import { portfolioResponse, Product } from '../payloads/response/portfolio-response';
import { AddTransactionService } from '../service/add-transaction.service';
import { GetPortfolioService } from '../service/get-portfolio.service';

@Component({
  selector: 'app-portfoliopage',
  templateUrl: './portfoliopage.component.html',
  styleUrls: ['./portfoliopage.component.css']
})
export class PortfoliopageComponent implements OnInit {

  transaction:Transaction = new Transaction
    quantity : number
    price : number
    selectedSide : string
    selectedProduct:string;

    portfolioId;
    productsByPortfolio:Array<Product>;

    tickers : any;

  isModal:boolean =false;
  constructor(private addTransactionService: AddTransactionService,private portfolio:GetPortfolioService,private router: Router,private route:ActivatedRoute) { }

  products = ["MSFT","NFLX","GOOGL","AAPL","TSLA","IBM","ORCL","AMZN"]
  sides = ["BUY", "SELL"]

  ngOnInit(): void {
    const id: Observable<string> = this.route.params.pipe(map(p => p['id']));
    id.subscribe((data) =>{
      this.portfolioId = data;
    });

    this.portfolio.getPortfolios().subscribe((data) =>{
      data.forEach(port =>{
        if(port.id == this.portfolioId){
          this.productsByPortfolio = port.products;
          console.log(this.productsByPortfolio)
        }
      });
    });
  }

  showModal(){
    this.isModal = true;
  }

  hideModal(){
    this.isModal = false;
  }

  /**
   * addTransaction
   */
  public addTransaction() {

    this.transaction.product= this.selectedProduct;
    this.transaction.quantity= this.quantity;
    this.transaction.price = this.price;
    this.transaction.side = this.selectedSide;
console.log(this.transaction)

    this.addTransactionService.addTransaction(this.transaction, this.portfolioId).subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/portfolio'])
    },(error)=>{
      alert("Transaction not successfull. Try again")
    })
  }

}
