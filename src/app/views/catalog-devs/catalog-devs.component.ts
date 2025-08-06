import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavigationSidebarComponent } from '../../shared/components/navigation-sidebar/navigation-sidebar.component';
import { CatalogNavbarComponent } from '../../shared/components/catalog-navbar/catalog-navbar.component';
import { CatalogFilterComponent } from '../../shared/components/catalog-filter/catalog-filter.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';

@Component({
  selector: 'app-catalog-devs',
  imports: [
    CommonModule, 
    NavigationSidebarComponent,
    CatalogNavbarComponent,
    CatalogFilterComponent,
    DeveloperCardComponent,
  ],
  templateUrl: './catalog-devs.component.html',
  styleUrl: './catalog-devs.component.css'
})
export class CatalogDevsComponent {
  
}
