
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class BannerService { 
           
  private userURL = "http://localhost:8086/banner/post";
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  public addBanner=function(data) 
  { 
    let promise = new Promise((resolve, reject) => {

    return this.http.post( this.userURL, JSON.stringify(data), { headers: this.headers}).toPromise() .then(
      (res:Response) => { // Success
       // console.log(res);      
        this.userdata = res.json();
      
      console.log(data);
        console.log(this.userdata['status']);
        if(this.userdata['status'] == "SUCCESS")  
        {
          localStorage.setItem("add",data.bannerArea);
          console.log(data.bannerArea);
        // this.toastr.info('register successful ','user');
         this.router.navigate(['/view-banner']);
        }
        else
        {     
      
        }
       
      })
    })
  }
  
}
  