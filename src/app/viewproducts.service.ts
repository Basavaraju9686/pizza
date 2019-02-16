


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
export class ViewproductsService { 
           
 
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  updateproducts(info) {
  console.log(info)
  return this.http.put(`http://localhost:8086/v1/updateproduct/`, info).subscribe(result=>{
    this.router.navigate(['/viewproduct'])
  
   },error=>console.log('there was an erroe:',error));
}
delete(id:number){
  return this.http.delete(`http://localhost:8086/product/delete/` + id).subscribe(result=>{
    
     },error=>console.log('there was an erroe:',error));

}
 
}
