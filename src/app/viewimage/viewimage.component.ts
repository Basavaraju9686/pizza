import { ViewimageService } from './../viewimage.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { ListimageService } from '../listimage.service';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.css']
})
export class ViewimageComponent implements OnInit {
  imagelist:any;
  constructor(private router:Router,private listimageService:ListimageService,private viewimageService:ViewimageService) {
    this.listimageService.getImage().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.imagelist=response.data;
      console.log(this.imagelist);
     })
       }
      
      
     
      editImage(list){
    this.viewimageService.updateImage(list)
  
    let imageId = list.imageId;
    localStorage.setItem("imageId", imageId)
      let imageName = list.imageName;
         localStorage.setItem("imageName", imageName)
         let imagePath = list.imagePath;
        localStorage.setItem("imagePath", imagePath)
        let header = list.header;
        localStorage.setItem("header", header)
        let desc1 = list.desc1;
        localStorage.setItem("desc1", desc1)
        let desc2 = list.desc2;
        localStorage.setItem("desc2", desc2)
        let desc3 = list.desc3;
        localStorage.setItem("desc3", desc3)
        let desc4 = list.desc4;
        localStorage.setItem("desc4", desc4)
        // let desc5 = list.desc5;
        // localStorage.setItem("desc5", desc5)
        // this.router.navigate(['/image'])
   }
   delete(id:number){
    console.log(id);  
    this.viewimageService.delete(id);

   }
      ngOnInit() {
      } 

}
