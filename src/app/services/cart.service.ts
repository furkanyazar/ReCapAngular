import { CarDetail } from './../models/carDetail';
import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private toastrService: ToastrService) {}

  addToCart(carDetail: CarDetail, rentDate: Date, returnDate: Date) {
    let item = CartItems.find((c) => c.carDetail.carId === carDetail.carId);

    if (!item) {
      let cartItem = new CartItem();
      cartItem.carDetail = carDetail;
      cartItem.rentDate = rentDate;
      cartItem.returnDate = returnDate;
      cartItem.days = this.daysBetween(rentDate, returnDate);

      CartItems.push(cartItem);
    } else {
      this.toastrService.error('Araç zaten sepette');
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(carDetail: CarDetail) {
    let item: CartItem = CartItems.find(
      (c) => c.carDetail.carId === carDetail.carId
    );

    CartItems.splice(CartItems.indexOf(item), 1);
    this.toastrService.info('Araba sepetten silindi');
  }

  treatAsUTC(date: Date): any {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

    return result;
  }

  daysBetween(startDate: Date, endDate: Date): any {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;

    return (
      (this.treatAsUTC(endDate) - this.treatAsUTC(startDate)) /
        millisecondsPerDay +
      1
    );
  }
}
