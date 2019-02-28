import { Router } from '@angular/router';
import { ViewcategoryService } from './../viewcategory.service';
import { Component, OnInit } from '@angular/core';
import { CategorylistService } from '../categorylist.service';


@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})

export class ViewcategoryComponent implements OnInit {
  categorylist:any;

  constructor(private categorylistService:CategorylistService,private viewcategoryService:ViewcategoryService,private router:Router) {
    this.categorylistService.getcategory().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.categorylist=response.data;
      
     })
       }
       editcategory(list){
        this.viewcategoryService.updatecategory(list)
       
          let categoryName = list.categoryName;
             localStorage.setItem("categoryName", categoryName)
             let description = list.description;
            localStorage.setItem("description", description)
            let categoryId = list.categoryId;
            localStorage.setItem("categoryId", categoryId)
           
      }
      delete(id:number){
       
       if (confirm("Are you sure ")){
        
         this.viewcategoryService.delete(id);
       }
      
        console.log(id)
        
        location.reload();
      }
     

     



  ngOnInit() {
  }

}
