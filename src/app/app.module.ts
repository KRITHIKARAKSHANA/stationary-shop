import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { dirConfig } from './dir.config';
import { RouterConfig,RouterDeclarations } from './app-routing.module';
import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';


import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';

import {SocialAuthServiceConfig} from 'angularx-social-login';
import {SocialLoginModule, GoogleLoginProvider} from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FileUploadComponent,
    dirConfig ,
    RouterDeclarations,
    FilterPipe,
    SortPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleMapsModule,
    FormsModule, 
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    RouterConfig
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('937951453027-d9q6a6k1f150p164n9gv91pf2u8v0944.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig
    },
    CurrencyPipe,
    ProductsModel,
    BillingFormModel,
    CompanyDetailsModel, 
    StorageService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
