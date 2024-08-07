import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRightComponent } from '../message-right/message-right.component';
import { MessageWrongComponent } from '../message-wrong/message-wrong.component';



@NgModule({
  declarations: [MessageRightComponent, MessageWrongComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageRightComponent, MessageWrongComponent],
})
export class MessageModule { }
