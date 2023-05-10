import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
  <div class="home-layout-container">
    <div> <app-main-menu></app-main-menu> </div>
    <div> <router-outlet></router-outlet> </div>
  </div>
  `,
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent {

}
