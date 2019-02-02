
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'
import {Subject} from 'rxjs'
import {debounceTime} from 'rxjs/operators'
import { ActivatedRoute }  from '@angular/router'

 


@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.css']
})
export class TrailComponent implements OnInit {
 
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;
  form = new FormGroup({
    bannerName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    bannerArea:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
  })
  forms = new FormGroup({
     
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,
                                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
      

})

  constructor() {
  }


  ngOnInit() {
  }

}
