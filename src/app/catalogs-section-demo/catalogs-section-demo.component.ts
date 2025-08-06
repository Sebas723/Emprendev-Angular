import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavigationSidebarComponent } from '../shared/components/navigation-sidebar/navigation-sidebar.component';
import { CatalogNavbarComponent } from '../shared/components/catalog-navbar/catalog-navbar.component';

@Component({
  selector: 'app-catalogs-section-demo',
  imports: [CommonModule, NavigationSidebarComponent, CatalogNavbarComponent],
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
