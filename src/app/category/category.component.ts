import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  validation=function(data){
   
    this.categoryService.addcategory(data);
    
  }



  form = new FormGroup({
    categoryName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    description:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),

  })



  ngOnInit() {
  }

  onSubmit(data){
         
    this. validation(data);
  
  }

}
