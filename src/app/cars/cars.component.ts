import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  addCar: boolean = true;
  buttonLabel: string = 'Add Other Car';

  constructor() {
    setTimeout(() => {
      this.addCar = false;
    }, 3000);
  }

  ngOnInit(): void {}
}
