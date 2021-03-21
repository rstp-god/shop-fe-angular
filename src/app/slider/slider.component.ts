import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate,state,AnimationEvent,useAnimation} from "@angular/animations";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [trigger ("slideAnimation" , 
    [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('800ms', style({ opacity: 0 }))
      ])
    ])
  ] 
})
export class SliderComponent implements OnInit {

  constructor() { }

  containerWidth : string   = `${window.innerWidth-40}px`;
  
  changeContainerWidth() {
    this.containerWidth =`${window.innerWidth-40}px`; 
  }

  public i:number =0; 
  public slides : string[]= ['assets/img/1.jpg','assets/img/2.jpg','assets/img/3.jpg']
  

  play (){
    setTimeout( () => {this.nextSlide(); this.play()},5000);
  } 

  showSlide() {
    return this.slides[this.i]; 
  }

  nextSlide(){
    this.i = this.i === this.slides.length-1 ? 0 : this.i + 1;
  }

  prevSlide(){
    this.i = this.i===0 ? this.slides.length-1 : this.i - 1;
  }

currentSlide(i:number){
  this.i=i; 
  return this.slides[this.i];
}

  ngOnInit(): void {
   this.play(); 
  }

}
