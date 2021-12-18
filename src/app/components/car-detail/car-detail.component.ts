import { CartService } from './../../services/cart.service';
import { Rent } from './../../models/rent';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from './../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetail;
  dataLoaded = false;
  minDate = new Date();
  rentDate: Date;
  returnDate: Date;

  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
      }
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetails(carId).subscribe((result) => {
      this.carDetail = result.data;
      this.dataLoaded = true;
    });
  }

  getImagesClass(path: string) {
    if (path == this.carDetail.carImagesPaths[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  addToCart() {
    if (!this.rentDate || !this.returnDate) {
      this.toastrService.error('Tarih aralığı uygun değil');
    } else {
      this.cartService.addToCart(
        this.carDetail,
        this.rentDate,
        this.returnDate
      );
    }
  }
}
