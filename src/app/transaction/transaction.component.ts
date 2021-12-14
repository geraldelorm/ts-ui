import { Component, OnInit } from '@angular/core';
import { GetuserordersService } from '../service/getuserorders.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  orders : any

  constructor(private getUserOrderService: GetuserordersService) { }

  ngOnInit(): void {
      this.getUserOrderService.getOrders().subscribe((data)=>{
        this.orders = data;
        console.log(data);

      }, (error)=>{
        alert("Error loading orders")
      })
  }

}
