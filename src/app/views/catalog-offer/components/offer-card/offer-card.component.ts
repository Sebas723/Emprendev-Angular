import { Component, ViewChild } from '@angular/core';

// Services
import { FilterService } from '../../../../shared/services/filter.service';

// Componentes
import { SidebarInfoCardComponent } from '../../../../shared/components/sidebar-info-card/sidebar-info-card.component';

// Interfaces
import { TemplateCard } from '../../../../interfaces/TemplateCard';
import { CatalogFilter } from '../../../../interfaces/CatalogFilter';

@Component({
  selector: 'app-offer-card',
  imports: [SidebarInfoCardComponent],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  @ViewChild(SidebarInfoCardComponent) sidebarInfoCard!: SidebarInfoCardComponent;

  offerCard: TemplateCard[] = [
    {id: 1, image: 'images/img2.jpg', title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 2, image: 'images/img2.jpg', title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 3, image: 'images/img2.jpg', title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 4, image: 'images/img2.jpg', title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 5, image: 'images/img2.jpg', title: 'Svelte', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 6, image: 'images/img2.jpg', title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 7, image: 'images/img2.jpg', title: 'Vue', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 8, image: 'images/img2.jpg', title: 'Svelte', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
  ]

  
  filteredCards: TemplateCard[] = [];
  
  constructor(private filterService: FilterService) {}
  
  sidebarInfoCardState() {
    this.sidebarInfoCard.isSidebarOpen = true;
  }

  ngOnInit() {
  this.filterService.filters$.subscribe(filters => {
    this.applyFilters(filters);
  });
  
  // Mostrar todas por defecto
  this.filteredCards = [...this.offerCard];
  }
  
  private applyFilters(filters: CatalogFilter) {
    let result = [...this.offerCard];

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
}
