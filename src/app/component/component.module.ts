import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbartComponent } from './navbart/navbart.component';



@NgModule({
  declarations: [
    NavbartComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports:[
    NavbartComponent
  ]
})
export class ComponentModule { }
