import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-devs',
  imports: [CommonModule],
  templateUrl: './catalog-devs.component.html',
  styleUrl: './catalog-devs.component.css'
})
export class CatalogDevsComponent {
  
  isSidebarOpen: boolean = false;
}
