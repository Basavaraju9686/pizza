import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {


  constructor(private categoryService:CategoryService) { }
  validation=function(data){
   
    this.categoryService.addcategory(data);
    
  }

  ngOnInit() {
  }

}
