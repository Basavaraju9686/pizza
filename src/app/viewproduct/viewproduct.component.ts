import { ProductComponent } from './../product/product.component';
import { ViewproductsService } from './../viewproducts.service';
import { Router } from '@angular/router';
import { ListproductsService } from './../listproducts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  productlist:any;
  constructor(private listproductsService:ListproductsService,private router:Router,private viewproductsService:ViewproductsService ) { 
  this.listproductsService.getProduct().subscribe(data =>{
    let res:any=data;
    let response=JSON.parse(res._body);
    this.productlist=response.data;
    console.log(this.productlist);
  })
}
editproduct(list){
      this.viewproductsService.updateproducts(list)
      let productId = list.productId;
      localStorage.setItem("productId", productId)
      let quantity = list.quantity;
      localStorage.setItem("quantity", quantity)
        let sku = list.sku;
           localStorage.setItem("sku", sku)
           let materialType = list.materialType;
          localStorage.setItem("materialType", materialType)
          let collectionDesc = list.collectionDesc;
          localStorage.setItem("collectionDesc", collectionDesc)
          let colors = list.colors;
          localStorage.setItem("colors", colors)
          let fabricPurity = list.fabricPurity;
          localStorage.setItem("fabricPurity", fabricPurity)
          let pattern = list.pattern;
          localStorage.setItem("pattern", pattern)
          let border = list.border;
          localStorage.setItem("border", border)
          let blouseColor = list.blouseColor;
          localStorage.setItem("blouseColor", blouseColor)
          let blouseLength = list.blouseLength;
          localStorage.setItem("blouseLength", blouseLength)
          let occassion = list.occassion;
          localStorage.setItem("occassion", occassion)
          let mainImageUrl = list.mainImageUrl;
          localStorage.setItem("mainImageUrl", mainImageUrl)
          let otherImageUrls = list.otherImageUrls;
          localStorage.setItem("otherImageUrls", otherImageUrls)
          this.router.navigate(['/product']);
         
         
     }
     delete(id:number){
      console.log(id);  
      this.viewproductsService.delete(id);
  
     }
  ngOnInit() {
  }

}
