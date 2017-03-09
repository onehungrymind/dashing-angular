import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/portfolio', icon: 'work', label: 'Portfolio'},
    { path: '/stocks', icon: 'trending_up', label: 'Stocks'}
  ];
}
