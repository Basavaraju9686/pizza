import { Router } from '@angular/router';
import { ImageaddService } from '../imageadd.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { store } from '@angular/core/src/render3/instructions';
import { Key } from 'protractor';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  bannerlist:any;
  banner:any;
  bannerArea:any;
  key:any;
  constructor(private imageaddService:ImageaddService,private router:Router, private imageService:ImageService) { 
    this.imageService.getBanner().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.bannerlist=response.data;
    //  this.router.navigate(['/viewimage']);
    console.log( this.bannerlist)
     
})



  }
  validation=function(data:any){
console.log(data);
  
    // console.log(this.key);
    this.imageaddService.addImage1(data)
    
  
  }

  form = new FormGroup({
    imageName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    imagePath:new FormControl('',[Validators.required,]),
    header:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descA:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descB:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descC:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descD:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    bannerArea:new FormControl('',[Validators.required])
    
  })


  ngOnInit() {
  }

  onSubmit(data){
         
    this. validation(data);

}}
