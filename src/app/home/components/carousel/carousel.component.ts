import { Component } from '@angular/core';
import {BookDemoService} from "../../../shared/services/book-demo.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  constructor(private _demo: BookDemoService) {}

  bookDemo() {
    this._demo.toggleVisibility(true)
  }
}
