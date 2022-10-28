import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  addCar: boolean = true;
  buttonLabel: string = 'Add Other Car';
  carAdded: string = 'Car was NOT added!';
  color: string = 'green';

  constructor() {
    setTimeout(() => {
      this.addCar = false;
    }, 3000);
  }

  ngOnInit(): void {}

  onCarAdded() {
    this.carAdded = 'Car WAS added! Color of the car is ' + this.color;
  }
}
