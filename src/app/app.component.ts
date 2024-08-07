import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  // interpolation de la variable message
  template: '<p>{{message}}</p>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  // déclaration d'une variable message à une chaîne vide
  message: string = "";
  // constructeur et injection du service MyService
  constructor(private myService: MyService) { }
  // méthode ngOnInit qui retourne rien 
  ngOnInit(): void {
    // la variable message prend la valeur de ce que rretourne la méthode getHello() dans la classe MyService
    this.message = this.myService.getHello();
  }

}
