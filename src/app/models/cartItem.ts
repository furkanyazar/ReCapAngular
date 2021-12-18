import { CarDetail } from 'src/app/models/carDetail';

export class CartItem {
  carDetail: CarDetail;
  rentDate: Date;
  returnDate: Date;
  days: number;
}
