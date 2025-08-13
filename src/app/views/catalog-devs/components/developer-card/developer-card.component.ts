import { Component, ViewChild, OnInit } from '@angular/core';

// Services
import { FilterService } from '../../../../shared/services/filter.service';

// Componentes
import { SidebarInfoCardComponent } from '../../../../shared/components/sidebar-info-card/sidebar-info-card.component';

// Interfaces
import { TemplateCard } from '../../../../interfaces/TemplateCard';
import { CatalogFilter } from '../../../../interfaces/CatalogFilter';

@Component({
  selector: 'app-developer-card',
  imports: [SidebarInfoCardComponent],
  templateUrl: './developer-card.component.html',
  styleUrl: './developer-card.component.css'
})
export class DeveloperCardComponent {

  @ViewChild(SidebarInfoCardComponent) sidebarInfoCard!: SidebarInfoCardComponent;

  developerCard: TemplateCard[] = [
    {id: 1, image: 'images/img2.jpg', title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 2, image: 'images/img2.jpg', title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 3, image: 'images/img2.jpg', title: 'Svelte', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 4, image: 'images/img2.jpg', title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
  ]

  filteredCards: TemplateCard[] = [];

  constructor(private filterService: FilterService) {}

    ngOnInit() {
    this.filterService.filters$.subscribe(filters => {
      this.applyFilters(filters);
    });

    // Mostrar todas por defecto
    this.filteredCards = [...this.developerCard];
  }

private applyFilters(filters: CatalogFilter) {
  let result = [...this.developerCard];

  if (filters['technology']?.length) {
    result = result.filter(card => {
      const searchableText = `${card.title} ${card.subtitle} ${card.description}`.toLowerCase();
      return filters['technology']?.some((tech: string) =>
        searchableText.includes(tech.toLowerCase())
      );
    });
  }

  this.filteredCards = result;
}

  sidebarInfoCardState() {
    this.sidebarInfoCard.isSidebarOpen = true;
  }
}
