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
export class AddserviceService { 
           

  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  public addproduct=function(data) 
  { 

    let promise = new Promise((resolve, reject) => {
    
      
      return this.http.post( "http://192.168.1.21:8086/v1/addproduct?categoryName="+data.categoryName, JSON.stringify(data), { headers: this.headers}).toPromise() .then(
        (res:Response) => { 
            
          this.userdata = res.json();
        
          console.log(this.userdata);
          
          if(this.userdata['status'] == "SUCCESS")  
          
          {
            this.router.navigate(['/viewproduct']);
           
          // this.toastr.info('register successful ','user');
           
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


