import { ViewcategoryService } from './../viewcategory.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  updateForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private viewcategoryService:ViewcategoryService, private formBuilder: FormBuilder,private router:Router) { }
  private categoryName=localStorage.getItem("categoryName");
  private description=localStorage.getItem("description");
  private categoryId=localStorage.getItem("categoryId");
  ngOnInit() {
  }
  validation=function(info){
    info.categoryId = this.categoryId;
    console.log(info)
   

    this.viewcategoryService.updatecategory(info)
  this.router.navigate(['/viewcategory'])
  }
}
