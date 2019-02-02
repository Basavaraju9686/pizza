import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { CategoryComponent } from './category/category.component';
import { AddComponent } from './add/add.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { ViewBannerComponent } from './view-banner/view-banner.component';
import { ImageComponent } from './image/image.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { CustomersComponent } from './customers/customers.component'; 
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ProductComponent } from './product/product.component';




const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'product-orders', component: ProductOrdersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'image', component: ImageComponent },
  { path: 'view-banner', component: ViewBannerComponent },
  {path:'viewimage',component:ViewimageComponent},
  {path:'add',component:AddComponent},
  {path:'add-image',component:AddImageComponent},
  {path:'category',component:CategoryComponent},
  {path:'viewcategory',component:ViewcategoryComponent},
  {path:'updatecategory',component:UpdatecategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'viewproduct',component:ViewproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




