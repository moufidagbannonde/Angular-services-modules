import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomDatePipe } from './custom-date.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
