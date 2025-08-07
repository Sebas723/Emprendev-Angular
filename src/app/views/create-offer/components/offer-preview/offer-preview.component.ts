import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferPreview } from '../../../../interfaces/OfferPreview';

@Component({
  selector: 'app-offer-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-preview.component.html',
  
  // 1) El host ahora es block, ocupa el ancho del contenedor y puede encogerse
  host: { class: 'block w-full min-w-0' },
  styles: [`
    /* 2) Evita que el host “empuje” el layout por contenido largo */
    :host { display: block; width: 100%; min-width: 0; max-width: 100%; }

    /* 3) Asegura que textos rompan palabras sin espacios */
    .break-safe { word-break: break-word; overflow-wrap: anywhere; }

    /* 4) Clamps inline (evitan depender de orden CSS) */
    .clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .clamp-5 { display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; }
  `],
})
export class OfferPreviewComponent {
  @Input({ required: true }) offer!: OfferPreview;
  @Input() fallbackImage = 'images/img2.jpg';
}