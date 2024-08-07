import { Component, OnInit } from '@angular/core';
import { GetDateService } from './service/get-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // interpolation de la variable message
  // template: '<p>{{jour}}</p>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: string = "salut"
  // jour !:string ;
  // // déclaration d'une variable message à une chaîne vide
  // // constructeur et injection du service 
  // constructor(private today:GetDateService){}
  // // méthode ngOnInit qui retourne rien 
  // ngOnInit(){
  //   this.jour = this.today.getDate();
  // }
  //   // la variable message prend la valeur de ce que rretourne la méthode getHello() dans la classe MyService


}
