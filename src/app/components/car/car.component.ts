import { CarDetail } from './../../models/carDetail';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  dataLoaded = false;
  filterCarText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && !params['colorId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId'] && !params['brandId']) {
        this.getCarsByColorId(params['colorId']);
      } else if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandIdAndColorId(params['brandId'], params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((result) => {
      this.cars = result.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((result) => {
      this.cars = result.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((result) => {
      this.cars = result.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService.getCarsByBrandIdAndColorId(brandId, colorId).subscribe((result) => {
      this.cars = result.data;
      this.dataLoaded = true;
    })
  }

  navigateToCarDetail(id: number) {
    this.router.navigate(['/cardetail/' + id]);
  }
}
