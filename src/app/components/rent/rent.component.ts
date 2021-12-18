import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from './../../services/rental.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  rentCars() {
    this.cartItems.forEach((c) => {
      this.rentalService.rentCar(c).subscribe((result) => {
        console.log(result);
        this.toastrService.success(
          c.carDetail.brandName + ' ' + c.carDetail.carName + ' kiralandı'
        );
      });
    });

    this.router.navigate(['/rentals']);
  }
}
