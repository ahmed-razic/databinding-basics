import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  ID: Date;
  carName: string = 'Golf';

  constructor() {
    this.ID = new Date();
  }

  ngOnInit(): void {}

  getID() {
    return this.ID.getSeconds();
  }
}
