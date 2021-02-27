import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ViewOrderItemList:any={};
  OrderItemList:any=[
    {
      Id:1,
    customerName:"Basavaraju",
    NoOfOrders:2,
    TotalAmount:500,
    Status:"OrderReceived",
    Items:[
      {
      itemName:'Pizza',
      price:250,
      qty:1
    },{
      itemName:'Coke',
      price:250,
      qty:1
    }
  ],
  address:"Banashankari 3rd stage, Bangalore"

  },
  {
    Id:2,
    customerName:"Kedar",
    NoOfOrders:1,
    TotalAmount:250,
    Status:"OrderReceived",
    Items:[
      {
      itemName:'Pizza',
      price:250,
      qty:1
    }
  ],
  address:"Jayanagar 3rd stage, Bangalore"

  },
  {
    Id:3,
    customerName:"Ramu",
    NoOfOrders:3,
    TotalAmount:600,
    Status:"Preparing",
    Items:[
      {
      itemName:'Pizza',
      price:250,
      qty:1
    },{
      itemName:'Coke',
      price:250
    },{
      itemName:'FrenchFries',
      price:100,
      qty:1
    }
  ],
  address:"Banashankari 3rd stage, Bangalore"

  },
  {
    Id:4,
    customerName:"Shamu",
    NoOfOrders:2,
    TotalAmount:400,
    Status:"ReadyToServe",
    Items:[
      {
      itemName:'Pizza',
      price:250,
      qty:1
    },{
      itemName:'FrenchFries',
      price:150,
      qty:1
    }
  ],
  address:"Banashankari 3rd stage, Bangalore"

  },
  {
    Id:5,
    customerName:"Raju",
    NoOfOrders:1,
    TotalAmount:100,
    Status:"OrderReceived",
    Items:[
     {
      itemName:'FrenchFries',
      price:100,
      qty:1
    }
  ],
  address:"Banashankari 3rd stage, Bangalore"

  }


];
orderrxvd:number;
preparing:number;
readytoserve:number;
totalamount:number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
this.checkvalue();
  }
checkvalue(){
  let result= this.OrderItemList.filter(data => data.Status =="OrderReceived");
let result1= this.OrderItemList.filter(data => data.Status =="Preparing");
let result2= this.OrderItemList.filter(data => data.Status =="ReadyToServe");

this.orderrxvd=result.length;
this.preparing=result1.length;
this.readytoserve=result2.length;

this.totalamount= result2.reduce(function(prev, cur) {
  return prev + cur.TotalAmount;
}, 0);

}

  checkstatus(data,id){
console.log(data,id);
if(data=="OrderReceived"){
  this.OrderItemList.forEach(element => {
    if(element.Id==id){
element.Status="Preparing";
this.checkvalue();
// this.router.navigate(['/viewproduct']);

    }
  });
  
}else if(data=="Preparing"){
  this.OrderItemList.forEach(element => {
    if(element.Id==id){
element.Status="ReadyToServe";
this.checkvalue();

    }
  });
}else{
  this.OrderItemList.forEach(element => {
    if(element.Id==id){
element.Status="ReadyToServe";
this.checkvalue();

    }
  });
}
  }

  viewitems(item){
    // this.ViewOrderItemList=[];
    // this.ViewOrderItemList.push(item);
    this.ViewOrderItemList=item;
 console.log(this.ViewOrderItemList);
  }
}
