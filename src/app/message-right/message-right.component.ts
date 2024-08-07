import { Component, OnInit } from '@angular/core';
import { GetDateService } from '../service/get-date.service';

@Component({
  selector: 'app-message-right',
  templateUrl: './message-right.component.html',
  styleUrl: './message-right.component.css'
})
export class MessageRightComponent {
    right !: string;

    constructor(private vrai: GetDateService){}

    ngOnInit(){
       this.vrai.rightAffiche();
    }
}
