import { ViewimageService } from './../viewimage.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewBannerService } from './../view-banner.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  updateForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private viewimageService:ViewimageService, private formBuilder: FormBuilder,private router:Router,private viewBannerService:ViewBannerService) { }
  private imageName=localStorage.getItem("imageName");
   private imagePath=localStorage.getItem("imagePath");
  private header=localStorage.getItem("header");
  private desc1=localStorage.getItem("desc1")
 private desc2=localStorage.getItem("desc2")
 private desc3=localStorage.getItem("desc3")
 private desc4=localStorage.getItem("desc4")
 private imageId=localStorage.getItem("imageId")
  
 validation=function(info){
    info.imageId = this.imageId;
    console.log(info)
   

    this.viewimageService.updateImage(info)
    this.router.navigate(['/viewimage'])
  location.reload()
  }

  form = new FormGroup({
    imageName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    imagePath:new FormControl('',[Validators.required,]),
    header:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descA:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descB:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descC:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    descD:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    
  })




ngOnInit() {
  this.updateForm = this.formBuilder.group({
      bannerName: ['', Validators.required],
      bannerArea: ['', Validators.required],
      bannerId: ['', Validators.required],
      
  });

  

}

}
