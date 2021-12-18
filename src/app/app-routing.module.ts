import { ColorEditComponent } from './components/color-edit/color-edit.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentComponent } from './components/rent/rent.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'cardetail/:carId', component: CarDetailComponent },
  { path: 'rent', component: RentComponent },
  { path: 'cars/add', component: CarAddComponent },
  { path: 'colors/add', component: ColorAddComponent },
  { path: 'brands/add', component: BrandAddComponent },
  { path: 'brands/update/:brandId', component: BrandEditComponent },
  { path: 'colors/update/:colorId', component: ColorEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
