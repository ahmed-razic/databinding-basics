import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, CarComponent, Assignment1Component, NgifDirectiveComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
