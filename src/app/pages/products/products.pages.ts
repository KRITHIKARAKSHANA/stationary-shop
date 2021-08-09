import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../model/products.model';


@Component({
  templateUrl: './products.html'
})

export class ProductsPage{
    public searchText: string = '';
    public cartflag:boolean= false;
    public sortBy: string ='';
    public sortOption: string ='product_name|asc';
  constructor (
    public products:ProductsModel
    
    ){

  }
  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 10 )
  }
  

}