import { Component, Input } from '@angular/core';

// Interfaces
import { TemplateInfoFormCard } from '../../../../interfaces/TemplateInfoFormCard';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {

  //Aqui le paso desde el componente padre los datos que lleva dentro esta variable
  @Input() infoCardData!: TemplateInfoFormCard;
}
