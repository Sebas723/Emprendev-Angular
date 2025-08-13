import { Pipe, PipeTransform } from '@angular/core';
import { TemplateCard } from '../../interfaces/TemplateCard';

@Pipe({
  name: 'technologyFilter',
})

export class TechnologyFilterPipe implements PipeTransform {
  transform(cards: TemplateCard[], filters: string[]): TemplateCard[] {
    if (!cards || filters.length === 0) return cards;

    return cards.filter(card =>
      filters.some(filter => 
        (card.title + ' ' + card.subtitle + ' ' + card.description)
          .toLowerCase()
          .includes(filter.toLowerCase())
      )
    );
  }
}