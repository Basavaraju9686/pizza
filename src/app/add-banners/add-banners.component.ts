import { Component, OnInit } from '@angular/core';
import { BannerService } from './../banner.service'

@Component({
  selector: 'app-add-banners',
  templateUrl: './add-banners.component.html',
  styleUrls: ['./add-banners.component.css']
})
export class AddBannersComponent implements OnInit {

  constructor(private bannerService:BannerService) { }
  validation=function(data){
   
    this.bannerService.addBanner(data);
    
  }
  ngOnInit() {
  }

}
