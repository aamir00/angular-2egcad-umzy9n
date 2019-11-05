import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn : 'root'
  }
)
export class CartService {

  items = [];
  constructor(private http : HttpClient) {

   }

  addToCart(product){
    this.items.push(product);
    return this.items;
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  getShippingPrices(){
    debugger;
    console.log(this.http.get('/assets/shipping.json'));
    return this.http.get('/assets/shipping.json');
  }

}