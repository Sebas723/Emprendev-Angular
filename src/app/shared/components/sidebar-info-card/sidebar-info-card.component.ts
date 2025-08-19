import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { CommunicationCardService } from '../../../shared/services/communication-card-service.service';

//Interfaces
import { TemplateCard } from '../../../interfaces/TemplateCard';
@Component({
  selector: 'app-sidebar-info-card',
  imports: [CommonModule],
  templateUrl: './sidebar-info-card.component.html',
  styleUrl: './sidebar-info-card.component.css'
})
export class SidebarInfoCardComponent {
  isSidebarOpen: boolean = false;

  infoCardData: TemplateCard = {} as TemplateCard;

  constructor(
    private communicationCardService: CommunicationCardService
  ) {}  

  ngOnInit(): void {
    this.communicationCardService.communicationCard$.subscribe((card) => {
      this.infoCardData = card;
    });
  }

  // Funcion para abrir y cerrar el sidebar
  sidebarState() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
