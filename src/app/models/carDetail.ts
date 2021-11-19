import { Car } from "./car";

export interface CarDetail extends Car {
  modelYear: number;
  description: string;
  carImagesPaths: string[];
}
