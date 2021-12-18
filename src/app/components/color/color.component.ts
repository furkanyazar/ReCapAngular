import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  currentColor: Color;
  filterColorText = '';

  constructor(private colorService: ColorService) {}

  @Output() colorEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((result) => {
      this.colors = result.data;
      this.dataLoaded = true;
    });
  }

  selectedColor(colorId: number) {
    this.colorEvent.emit({colorId});
  }

  // setCurrentColor(color: Color) {
  //   this.currentColor = color;
  // }

  // getCurrentColorClass(color: Color) {
  //   if (color == this.currentColor) {
  //     return 'list-group-item active';
  //   } else {
  //     return 'list-group-item';
  //   }
  // }
}
