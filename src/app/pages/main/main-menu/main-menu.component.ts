import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded: boolean = true;
  isShowing: boolean = false;

  mouseenter(){
    if(!this.isExpanded){
      this.isShowing = true;
    }
  }

  mouseleave(){
    if(!this.isExpanded){
      this.isShowing = false;
  }
}
}
