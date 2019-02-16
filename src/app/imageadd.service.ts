
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
export class ImageaddService { 
           

  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  public addImage1=function(data) 
  { 

    let promise = new Promise((resolve, reject) => {
     
      
      return this.http.post( "http://localhost:8086/control/post/ImageModel/bannerArea?bannerArea="+data.bannerArea, JSON.stringify(data), { headers: this.headers}).toPromise() .then(
        (res:Response) => { 
            
          this.userdata = res.json();
        
          console.log(this.userdata);
          if(this.userdata['status'] == "SUCCESS")  
          {
           
          // this.toastr.info('register successful ','user');
           this.router.navigate(['/viewimage']);
          }
          else
          {     
          // this.toastr.success('alredy Exist ','user');
          }
          //catch(this.handleError);
        })
      })
    }






}


