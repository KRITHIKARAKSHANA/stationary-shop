import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { BillingPage } from './pages/billing/billing.pages';
import { CheckoutPage } from './pages/checkout/checkout.pages';
import { ProductsPage } from './pages/products/products.pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent
  },
  { 
    path : 'products' , 
    component : ProductsPage
  },
  { 
    path : 'billing' , 
    component : BillingPage
  },
  { 
    path : 'checkout' , 
    component : CheckoutPage 
  },
];

export const RouterConfig = [
  RouterModule.forRoot(
    routes,{
      enableTracing : false,
      useHash : false
  })

];

export const RouterDeclarations = [ ProductsPage , BillingPage , CheckoutPage ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
