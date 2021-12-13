import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../payloads/request/transaction';
import { AddTransactionService } from '../service/add-transaction.service';

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

  isModal:boolean =false;
  constructor(private addTransactionService: AddTransactionService,private router: Router) { }

  products = ["MSFT","NFLX","GOOGL","AAPL","TSLA","IBM","ORCL","AMZN"]
  sides = ["BUY", "SELL"]

  ngOnInit(): void {
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


    this.addTransactionService.addTransaction(this.transaction).subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/portfolio'])
    },(error)=>{
      alert("Transaction not successfull. Try again")
    })
  }

}
