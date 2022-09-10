import { Component } from '@angular/core';
import { ROUTES } from './constants';

@Component({
  selector: 'examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'examples';
  menuItems = Object.values(ROUTES);
}
