import { Router } from '@angular/router';
import { CategorylistService } from './../categorylist.service';
import { ListproductsService } from './../listproducts.service';
import { CategorynameService } from './../categoryname.service';
import { CategoryService } from './../category.service';
import { AddserviceService } from './../addservice.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  categorynamelist:any;

  constructor(private addserviceService:AddserviceService,private categorynameService:CategorynameService,private categorylistService:CategorylistService,private router:Router) {
    this.categorylistService.getcategory().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.categorynamelist=response.data;

     
})

   }
  validation=function(data){
    console.log(data)
    this.addserviceService.addproduct(data)
    // this.router.navigate(['/viewproduct']);
  
   
  }

  ngOnInit() {
  }

}
