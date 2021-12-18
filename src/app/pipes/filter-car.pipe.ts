import { CarDetail } from 'src/app/models/carDetail';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCar',
})
export class FilterCarPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? value.filter(
          (c: CarDetail) =>
            (c.brandName + ' ' + c.carName)
              .toLocaleLowerCase()
              .indexOf(filterText) !== -1
        )
      : value;
  }
}
