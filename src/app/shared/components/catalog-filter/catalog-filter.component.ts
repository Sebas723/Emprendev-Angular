import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-catalog-filter',
  imports: [CommonModule],
  templateUrl: './catalog-filter.component.html',
  styleUrl: './catalog-filter.component.css'
})
export class CatalogFilterComponent {
  
  filter = [
    {id: 1, name: 'Tecnologias', options: ['Angular', 'React', 'Vue', 'Svelte', 'Next.js']},
  ]
  
  menuFilterOpenIndex: number | null = null;

  selectedTechnologies: string[] = [];

  
  constructor(private filterService: FilterService) {}
  
  openMenuFilter(itemId: number): void {
    this.menuFilterOpenIndex = this.menuFilterOpenIndex === itemId ? null : itemId;
  }

  closeMenuFilter(itemId: number): void {
    this.menuFilterOpenIndex = this.menuFilterOpenIndex === itemId ? null : itemId;
  }

  onTechnologiesSelect(tech: string): void {
    if (this.selectedTechnologies.includes(tech)) {
      this.selectedTechnologies = this.selectedTechnologies.filter(t => t !== tech);
    } else {
      this.selectedTechnologies.push(tech);
    }

    this.filterService.setFilters({ technology: this.selectedTechnologies });
    console.log(this.filterService.getFilters());
  }

  // Opciones disponibles dinámicamente sin modificar las originales
  get availableTechnologies(): string[] {
    return this.filter[0].options.filter(opt => !this.selectedTechnologies.includes(opt));
  }

  removeTechnology(tech: string): void {
    this.selectedTechnologies = this.selectedTechnologies.filter((item) => item !== tech);
    this.filterService.setFilters({ technology: this.selectedTechnologies });
  }
}
