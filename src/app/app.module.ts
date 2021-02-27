
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import {ReactiveFormsModule, FormControl} from '@angular/forms';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [ 
    AppComponent,
    DashboardComponent,
    PipesComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
