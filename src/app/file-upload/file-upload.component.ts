import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  VERSION,
  ViewChildren
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { CartService } from './cart.service';
@Component({
  selector: 'my-app',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  // @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap') subTotalItems: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing') subTotalItems_existing: QueryList<
    ElementRef
  >;

  constructor(
    private router: Router,
    public cartService: CartService,
    private currencyPipe: CurrencyPipe // private builder: FormBuilder
  ) {}

  items = [];
  searchText: string;
  sampleSuggestionsArray = [
    {
      id: '1',
      menuName: 'Apple Watch',
      variationCost: '35000',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlPW9yfPZ9ML-f7ZDovLB2xTvR9eN5l5bOQ&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '2',
      menuName: 'iPhone 11',
      variationCost: '58999',
      desc:
        'https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg',
      qtyTotal: 0
    },
    {
      id: '3',
      menuName: 'Denim Jeans',
      variationCost: '3999',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVpjWCHTxpwgqz9z8I2INbKuvZrHLKXiQng&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '4',
      menuName: 'Asus Laptop',
      variationCost: '55000',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg2XvZ-ZMloRguxBf9HnaXR-qj0PWR7jfyA&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '5',
      menuName: 'Glass Canisters',
      variationCost: '1200',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7COeAyeeVH9CLpu0ap3QB23ggAEFEvIw60w&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '6',
      menuName: 'Women Converse',
      variationCost: '4999',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3e8m29mqatN1g3d5HbbbffDUJAxJjPtljw&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '7',
      menuName: 'Furry Teddy Bear',
      variationCost: '2750',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35CEs9rTPg3cpHJ1KSac7M5VUGlgYmMrwQg&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '8',
      menuName: 'Apartment by DANIELLE STEEL',
      variationCost: '1150',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtM_FJU1S8C0GwJtrtO3mA6YZj4XIHQ-EQkg&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '9',
      menuName: 'Black Formal Shirt',
      variationCost: '3640',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsiYyWkw0C5F2DZgEI_6nXKi1KQUKUL4olw&usqp=CAU',
      qtyTotal: 0
    },
    {
      id: '10',
      menuName: 'Baby Care set',
      variationCost: '2890',
      desc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNHw2qnGnVQSvuClnLAAK61cBi50gsX53pg&usqp=CAU',
      qtyTotal: 0
    }
  ];

  //----- calculate total
  get total() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        variationCost: sum.variationCost + x.qtyTotal * x.variationCost
      }),
      { qtyTotal: 1, variationCost: 0 }
    ).variationCost;
  }

  changeSubtotal(item, index) {
    const qty = item.qtyTotal;
    const amt = item.variationCost;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, 'USD');

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  //----- add item to cart
  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }
  
  dashboard(): void {
    this.router.navigateByUrl('/dashboard').then();
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }
}
