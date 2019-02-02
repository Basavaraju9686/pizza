import { CartItemService } from './../cart-item.service';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.css']
})
export class ProductOrdersComponent implements OnInit {
  CartItemList:any;
  OrderItemList:any;
  
  constructor(private cartItemService:CartItemService) { 
    this.cartItemService.getcartItem().subscribe(data =>{
     let res:any = data;
     let response = JSON.parse(res._body);
     this.CartItemList = response.data;
    console.log(  this.CartItemList)
 }) }

  ngOnInit() {
    $(document).ready(function() {
      $('#product-orders').DataTable();
  } );
  }
  order(orderId){
    this.cartItemService.getOrderItem(orderId).subscribe(data =>{ 
      let res:any = data;
      let response = JSON.parse(res._body);
      this.OrderItemList = response.data;
     //  this.cartItemImage =this.CartItemList[0].imageUrl;
      console.log(this.OrderItemList)
      
    
 
    
  })
  }
}
