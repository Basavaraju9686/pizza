import { BannerService } from './../banner.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private bannerService:BannerService) { }
  validation=function(data){
    // localStorage.setItem("addimage",data);
    // alert(this.addimage);
    this.bannerService.addBanner(data);
    
  }

  form = new FormGroup({
    bannerName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
    bannerArea:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+")]),
  
  })

  ngOnInit() {
  }


  onSubmit(data){
         
    this. validation(data);
}

}
