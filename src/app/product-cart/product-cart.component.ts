import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  items;
  constructor(
    private cart : CartService
  ) { }

  ngOnInit() {
     this.items = this.cart.getItems();
  };
 
}