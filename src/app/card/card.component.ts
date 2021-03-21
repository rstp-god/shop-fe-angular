import { Component, OnInit, Input } from '@angular/core'; 

@Component({
    selector : 'app-card',
    templateUrl :'./card.component.html', 
    styleUrls: ['./card.component.css'], 
})
export class CardComponent  implements OnInit{
    containerWidth : string   = `${(window.innerWidth-40)/4}px`;

     changeContainerWidth() {
        this.containerWidth =`${(window.innerWidth-40)/4}px`; 
     }

    ngOnInit() {
    }
}