import { Component } from '@angular/core';
import { sidebarItems } from '../../tournament.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sidebarItems: any = {};

  constructor() {
    this.sidebarItems = sidebarItems
  }
}
