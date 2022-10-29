import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userNames = ['First', 'Second', 'Third'];

  title = 'databinding-basics';
}
