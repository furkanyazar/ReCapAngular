import { Router } from '@angular/router';
import { CarDetail } from './../../models/carDetail';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(carDetail: CarDetail) {
    this.cartService.removeFromCart(carDetail);
  }

  navigateToRent() {
    this.router.navigate(['/rent']);
  }
}
