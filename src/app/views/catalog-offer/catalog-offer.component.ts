import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavigationSidebarComponent } from '../../shared/components/navigation-sidebar/navigation-sidebar.component';
import { CatalogNavbarComponent } from '../../shared/components/catalog-navbar/catalog-navbar.component';
import { CatalogFilterComponent } from '../../shared/components/catalog-filter/catalog-filter.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';


@Component({
  selector: 'app-catalog-offer',
  imports: [
    CommonModule,
    NavigationSidebarComponent,
    CatalogNavbarComponent,
    CatalogFilterComponent,
    OfferCardComponent
  ],
  templateUrl: './catalog-offer.component.html',
  styleUrl: './catalog-offer.component.css'
})
export class CatalogOfferComponent {

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
