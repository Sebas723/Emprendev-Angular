import { Component, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';

// Services
import { FilterService } from '../../../../shared/services/filter.service';
import { SearchInputFilterService } from '../../../../shared/services/search-input-filter.service';
import { CommunicationCardService } from '../../../../shared/services/communication-card-service.service';

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

  // Tarjetas de desarrolladores
  developerCard: TemplateCard[] = [
    {id: 1, role:'developer', image: ['images/img2.jpg'], title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 2, role:'developer', image: ['images/img2.jpg'], title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 3, role:'developer', image: ['images/img2.jpg'], title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 4, role:'developer', image: ['images/img2.jpg'], title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 5, role:'developer', image: ['images/img2.jpg'], title: 'Svelte', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 6, role:'developer', image: ['images/img2.jpg'], title: 'REACT, Angular', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 7, role:'developer', image: ['images/img2.jpg'], title: 'Vue', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 8, role:'developer', image: ['images/img2.jpg'], title: 'Svelte', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
  ]

  // Esta variable guarda las tarjetas que coinciden con los filtros y el texto de búsqueda
  filteredCards: TemplateCard[] = [];

  constructor(
    private filterService: FilterService,
    private searchInputFilterService: SearchInputFilterService,
    private communicationCardService: CommunicationCardService
  ) {}

  //Uso de combineLatest para manejar los cambios en los filtros y en el texto de búsqueda a la vez, esto me permite escuchar ambos cambios y aplicarlos a la vez 
  ngOnInit() {
    combineLatest([
      this.filterService.filters$,
      this.searchInputFilterService.searchText$
    ]).subscribe(([filters, searchText]) => {
      this.applyAllFilters(filters, searchText);
    });

    // Mostrar todas por las tarjetas por defecto
    this.filteredCards = [...this.developerCard];
  }

  // Aplicar todos los filtros a la vez
  private applyAllFilters(filters: CatalogFilter, searchText: string) {

    let result = [...this.developerCard];

    // Filtrar por tecnología
    if (filters['technology']?.length) {
      result = result.filter(card => {
        const textMatch = `${card.title} ${card.subtitle} ${card.description}`.toLowerCase();
        return filters['technology']?.every((tech: string) =>
          textMatch.includes(tech.toLowerCase())
        );
      });
    }

    // Filtrar por texto de búsqueda
    if (searchText?.trim()) {
      result = result.filter(card =>
        `${card.title} ${card.subtitle} ${card.description}`.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    this.filteredCards = result;
  }

  sidebarInfoCardState() {
    this.sidebarInfoCard.isSidebarOpen = true;
  }

  // Funcion para enviar la informacion de las card al servicio CommunicationCardService
  sendInfoCard( card: TemplateCard){
    this.communicationCardService.setInfoCard(card);
    console.log(this.communicationCardService.getInfoCard());
  }
}
