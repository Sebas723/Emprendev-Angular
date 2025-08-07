import { Component, ViewChild } from '@angular/core';

// Componentes
import { SidebarInfoCardComponent } from '../../../../shared/components/sidebar-info-card/sidebar-info-card.component';

// Interfaces
import { TemplateCard } from '../../../../interfaces/TemplateCard';

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
    {id: 2, image: 'images/img2.jpg', title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 3, image: 'images/img2.jpg', title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
    {id: 4, image: 'images/img2.jpg', title: 'Advanced card', subtitle: 'Lorem ipsum dolor sit', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus molestiae provident itaque possimus iusto eum perferendis, id corrupti voluptate beatae, Lorem ipsum dolor sit amet, consectetur'},
  ]

  sidebarInfoCardState() {
    this.sidebarInfoCard.isSidebarOpen = true;
  }
}
