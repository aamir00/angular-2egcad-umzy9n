import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shipping',
  templateUrl: './product-shipping.component.html',
  styleUrls: ['./product-shipping.component.css']
})
export class ProductShippingComponent implements OnInit {
  shippingCosts;
  constructor( private cart : CartService) { }

  ngOnInit() {
  this.shippingCosts = this.cart.getShippingPrices();
  // console.log(this.)
  }

}