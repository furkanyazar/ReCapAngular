import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  filterBrandId: number = 0;
  filterColorId: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFilter() {
    if (this.filterBrandId === 0 && this.filterColorId === 0) {
      this.router.navigate(['/cars']);
    } else if (this.filterBrandId !== 0 && this.filterColorId === 0) {
      this.router.navigate(['/cars/brand/' + this.filterBrandId]);
    } else if (this.filterBrandId === 0 && this.filterColorId !== 0) {
      this.router.navigate(['/cars/color/' + this.filterColorId]);
    } else if (this.filterBrandId !== 0 && this.filterColorId !== 0) {
      this.router.navigate(['/cars/brand/' + this.filterBrandId + "/color/" + this.filterColorId]);
    }
  }

  selectedColor(data: any) {
    this.filterColorId = data.colorId;
  }

  selectedBrand(data: any) {
    this.filterBrandId = data.brandId;
  }

}
