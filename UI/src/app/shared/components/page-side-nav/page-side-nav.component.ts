import { Component } from '@angular/core';


export interface NavigationItem {
  value: string;
  link: string;
}

@Component({
  selector: 'page-side-nav',
  standalone: false,
  
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {
  panelName: string = '';
  navItems: NavigationItem[] = [];

  constructor() {
  this.navItems = [
    { value: 'View Books', link: 'view-books' },
    { value: 'My Orders', link: 'my-orders' },
  ];
  }
}

