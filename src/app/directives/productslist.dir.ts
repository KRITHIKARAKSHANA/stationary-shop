import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'productslist-dir',
  template: `
  
  <div class="container">
<h2>Products</h2>
<div class="abc">
  <div class="cards-deck row">
    <div class="card col-sm-4" *ngFor="let item of __allprdts | filter:__searchedProduct | sortBy : sortByOption  ">
      <div class="card-title">
      <h3>{{item.product_name}}</h3>
      </div>
      <div class="card-body">
      <img class="rounded mx-auto d-block img-responsive mt-3" src="{{item.product_image}}" alt="Card image cap">
      </div>
      <div class="card-footer">
        <p>₹ {{item.product_price}}.00</p>
        <br/>
        <button (click)="addToCart(item.p_id,1)" class="btn btn-secondary mb-1" style="background-color:#17202A ;border:black">
          Add to cart
          <span class="icon-add_circle"></span>
        </button>
      </div>
    </div>
  </div>
</div>
</div>     
  `,
  styles: [`
     input{ margin: 5px; }
     img{
       height:120px;
       width:auto
     }
     .col-md-4{
       margin-bottom:20px;
     }
  `]
})
export class ProductsListDir {
  constructor(
    public storage: StorageService,
    public cart: CartService
  ){

  }

  @Input("allProductList") __allprdts: any = {};
  @Input("searchedText") __searchedProduct: string='';
  @Input("sortingBy") sortByOption: string='';
  
  @Output() refresh:EventEmitter<string> = new EventEmitter(); 

  ngOnInit(){
    this.sortByOption = 'product_name';
  }
  addToCart(productId,productQty){    
    this.cart.allItems = this.__allprdts;
    this.cart.addToCart(productId,productQty,'');
    this.refresh.emit('true');
  }

  

}


