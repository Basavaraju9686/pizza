
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
export class ViewBannerService { 
           
  // private userURL = "http://localhost:8045/banner";
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  // public update(list) 
  // { 
  //   let promise = new Promise((resolve, reject) => {
  //   return this.http.put( this.userURL+'/update ', JSON.stringify(list), { headers: this.headers}).toPromise() .then(
  //     (res:Response) => { // Success
  //      // console.log(res);      
  //       this.userdata = res.json();
  //     //  console.log('userdata',this.userdata['email']);
  //     //  console.log('userdata',this.userdata['password']);  
  //       console.log(this.userdata['status']);
  //       if(this.userdata['status'] == "SUCCESS")  
  //       {
  //         // this.router.navigate(['/login']);
  //       // this.toastr.info('register successful ','user');
  //       //   this.router.navigate(['/login']);
  //       }
  //       else
  //       {     
  //       // this.toastr.success('alredy Exist ','user');
  //       }
  //       //catch(this.handleError);
  //     })
  //   })

    
  // }


  updatebanner(info) {
    console.log(info)
    return this.http.put(`http://localhost:8086/banner/update/`, info).subscribe(result=>{
    
     },error=>console.log('there was an erroe:',error));
}

updateImage(info) {
  console.log(info)
  return this.http.put(`http://localhost:8086/control/update/`, info).subscribe(result=>{
  
   },error=>console.log('there was an erroe:',error));
}
delete(id:number){
  return this.http.delete(`http://localhost:8086/banner/delete/` + id).subscribe(result=>{
    
     },error=>console.log('there was an erroe:',error));
     
}
 
}
