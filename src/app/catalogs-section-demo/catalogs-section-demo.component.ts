import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogs-section-demo',
  imports: [CommonModule],
  templateUrl: './catalogs-section-demo.component.html',
  styleUrl: './catalogs-section-demo.component.css'
})
export class CatalogsSectionDemoComponent {
  
  isCollapsed = false;
  menuOpen = false;

  toggleSideBar(){
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
