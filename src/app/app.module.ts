import { ViewBannerService } from './view-banner.service';
import { BannerService } from './banner.service';
import { ImageService } from './image.service';
import { AddserviceService } from './addservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import {ReactiveFormsModule, FormControl} from '@angular/forms';
import {HttpModule } from '@angular/http';
import{FormsModule} from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import{RouterModule} from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ImageComponent } from './image/image.component';
import { ViewBannerComponent } from './view-banner/view-banner.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { AddComponent } from './add/add.component';
import { AddImageComponent } from './add-image/add-image.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { CategoryComponent } from './category/category.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ProductComponent } from './product/product.component';
import { ListviewproductComponent } from './listviewproduct/listviewproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ 
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductsComponent,
    AddProductsComponent,
    CustomersComponent,
    ProductOrdersComponent,
    AccountComponent,
    LoginComponent,
    BannerComponent,

    ImageComponent,
    ViewBannerComponent,
    AddProductsComponent,
    ViewimageComponent,
    AddComponent,
    AddImageComponent,
    EditImageComponent,
    CategoryComponent,
    ViewcategoryComponent,
    UpdatecategoryComponent,
    ViewproductComponent,
    ProductComponent,
    ListviewproductComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [AddserviceService,ImageService,BannerService,ViewBannerService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
