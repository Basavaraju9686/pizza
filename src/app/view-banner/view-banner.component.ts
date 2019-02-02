import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { ViewBannerService } from './../view-banner.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';


@Component({
  selector: 'app-view-banner',
  templateUrl: './view-banner.component.html',
  styleUrls: ['./view-banner.component.css']
})
export class ViewBannerComponent implements OnInit {
bannerlist:any;
bannerName:any;
bannerArea:any;

  constructor(private imageService:ImageService,private router:Router,private viewBannerService:ViewBannerService) {
this.imageService.getBanner().subscribe(data =>{
  let res:any=data;
  let response=JSON.parse(res._body);
  this.bannerlist=response.data;
  
 })
   }
  
   editUser(list){
    // this.viewBannerService.updatebanner(list)
   
      let bannerName = list.bannerName;
         localStorage.setItem("bannerName", bannerName)
         let bannerArea = list.bannerArea;
        localStorage.setItem("bannerArea", bannerArea)
        let bannerId = list.bannerId;
        localStorage.setItem("bannerId", bannerId)

        this.router.navigate(['/banner'])
        

  }
  delete(id:number){
    console.log(id)
    alert("are you sure")
    this.viewBannerService.delete(id);
    location.reload()

  }
  ngOnInit() {
  } 

}
