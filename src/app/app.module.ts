import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageWrongComponent } from './message-wrong/message-wrong.component';
import { MessageRightComponent } from './message-right/message-right.component';
import { MessageModule } from './message/message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
