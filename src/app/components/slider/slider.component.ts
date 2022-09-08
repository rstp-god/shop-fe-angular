import {Component} from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [trigger('slideAnimation',
    [
      transition(':enter', [
        style({opacity: 0}),
        animate('1000ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('1000ms', style({opacity: 0, display: 'none  '}))
      ])
    ])
  ]
})
export class SliderComponent {


  public i: number = 0;
  public slides: string[] = ['assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg'];


  showSlide() {
    return this.slides[this.i];
  }

  nextSlide() {
    this.i = this.i === this.slides.length - 1 ? 0 : this.i + 1;
  }

  prevSlide() {
    this.i = this.i === 0 ? this.slides.length - 1 : this.i - 1;
  }

  currentSlide(i: number) {
    this.i = i;
    return this.slides[this.i];
  }
}
