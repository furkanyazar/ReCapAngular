import { RentalService } from './../../services/rental.service';
import { Rental } from './../../models/rental';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  dataLoaded = false;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((result) => {
      this.rentals = result.data;
      this.dataLoaded = true;
    });
  }
}
