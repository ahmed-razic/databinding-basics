import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styles: [
    `
      .first {
        color: white;
      }
    `,
  ],
})
export class NgifDirectiveComponent implements OnInit {
  userNameExists: boolean = false;
  userName: string = '';
  randomNumber: any;

  constructor() {}

  ngOnInit(): void {}

  onDisplayName() {
    this.userNameExists = true;
  }

  getColor() {
    this.randomNumber = Math.random();
    return this.randomNumber > 0.5 ? 'red' : 'green';
  }
}
