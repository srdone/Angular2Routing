import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a [routerLink]="['/lazy-loaded']">Lazy Loaded Route</a>
      <a [routerLink]="['/eagerly-loaded']">Eagerly Loaded Route</a>
    </nav>
    <h1>
      {{title}}
    </h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Routing Examples';
}
