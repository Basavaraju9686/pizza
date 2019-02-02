import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})

export class CartItemService {
  private headers = new Headers({'Content-Type' :'application/json'})
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
    myData:any;
    private userURL = "http://localhost:8086/Orders/getOrderByCustomer/" ;  
    private userURL1="    http://localhost:8086/Orders/getOrderDetailsByOrderId";                       
  constructor(private http: Http) { }


  getcartItem(){
    this.myData = JSON.parse(localStorage.getItem("loginData"))
    console.log(this.myData)
    let url = this.userURL+'/{email}'+'?email='+this.myData.email;
  return this.http.get(url , { headers: this.headers}).map(data => {
    let res = data;
     console.log(res); 
     return res;
    })
  }
  getOrderItem(orderId){
    this.myData = JSON.parse(localStorage.getItem("loginData"))
    console.log(this.myData)
    let url = this.userURL1+'/{orderId}'+'?orderId='+orderId;
  return this.http.get(url , { headers: this.headers}).map(data => {
    let res = data;
     console.log(res); 
     return res;
    })
  }
}
