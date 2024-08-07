import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {

  constructor() { }

  wrongAffiche(){
    alert("Faux Message");
  }
  rightAffiche(){
    alert("Vrai message");
  }
}
