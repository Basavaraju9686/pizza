import { ViewimageService } from './../viewimage.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewBannerService } from './../view-banner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-images',
  templateUrl: './update-images.component.html',
  styleUrls: ['./update-images.component.css']
})
export class UpdateImagesComponent implements OnInit {

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
    location.reload();  

  
  }

ngOnInit() {
  this.updateForm = this.formBuilder.group({
      bannerName: ['', Validators.required],
      bannerArea: ['', Validators.required],
      bannerId: ['', Validators.required],
      
  });

  

}


}
