import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { Router } from '@angular/router';
import { ViewBannerService } from './../view-banner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updatebanners',
  templateUrl: './updatebanners.component.html',
  styleUrls: ['./updatebanners.component.css']
})
export class UpdatebannersComponent implements OnInit {

  updateForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private bannerService:BannerService, private formBuilder: FormBuilder,private router:Router,private viewBannerService:ViewBannerService) { }
  private bannerName=localStorage.getItem("bannerName");
  private bannerArea=localStorage.getItem("bannerArea");
  private bannerId=localStorage.getItem("bannerId");
  // validation=function(data){
  //   console.log(data)
  //   this.bannerService.addbanner(data)
  // }


  validation=function(info){
    info.bannerId = this.bannerId;
    console.log(info)
    // this.bannerService.addbanner(info)

    this.viewBannerService.updatebanner(info)
    this.router.navigate(['/update'])
   
  }

ngOnInit() {
  this.updateForm = this.formBuilder.group({
      bannerName: ['', Validators.required],
      bannerArea: ['', Validators.required],
      bannerId: ['', Validators.required],
      
  });

  

}
}
