import { ViewproductsService } from './../viewproducts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private viewproductsService:ViewproductsService) {}
   private quantity=localStorage.getItem("quantity");
   private productId=localStorage.getItem("productId");
    private sku=localStorage.getItem("sku");
    private materialType=localStorage.getItem("materialType");
    private collectionDesc=localStorage.getItem("collectionDesc");
  
    private colors=localStorage.getItem("colors");
    private fabricPurity=localStorage.getItem("fabricPurity");
    private pattern=localStorage.getItem("pattern");
    private border=localStorage.getItem("border");
    
    private blouseColor=localStorage.getItem("blouseColor");
    private blouseLength=localStorage.getItem("blouseLength");
    private occassion=localStorage.getItem("occassion");
    private mainImageUrl=localStorage.getItem("mainImageUrl");
    private otherImageUrls=localStorage.getItem("otherImageUrls");


 
    validation=function(info){
      info.productId = this.productId;
      console.log(info)
     
  
      this.viewproductsService.updateproducts(info)
    
    }
  
  ngOnInit() {
    
   
  
    
  
  }

   

  

}
