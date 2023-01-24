import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getShippingPrices(): any {
    return this.http.get('/assets/shipping.json');
  }
  items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) {}

}