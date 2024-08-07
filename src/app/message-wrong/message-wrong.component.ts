import { Component } from '@angular/core';
import { GetDateService } from '../service/get-date.service';

@Component({
  selector: 'app-message-wrong',
  templateUrl: './message-wrong.component.html',
  styleUrl: './message-wrong.component.css'
})
export class MessageWrongComponent {

  constructor(private faux: GetDateService) { }

  ngOnInit() {
    this.faux.wrongAffiche();
  }
}
