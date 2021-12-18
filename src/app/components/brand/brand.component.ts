import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  currentBrand: Brand;
  filterBrandText = '';

  constructor(private brandService: BrandService) {}

  @Output() brandEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((result) => {
      this.brands = result.data;
      this.dataLoaded = true;
    });
  }

  selectedBrand(brandId: number) {
    this.brandEvent.emit({brandId});
  }

  // setCurrentBrand(brand: Brand) {
  //   this.currentBrand = brand;
  // }

  // getCurrentBrandClass(brand: Brand) {
  //   if (brand == this.currentBrand) {
  //     return 'list-group-item active';
  //   } else {
  //     return 'list-group-item';
  //   }
  // }
}
