import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CatalogFilter } from '../../interfaces/CatalogFilter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filtersSubject = new BehaviorSubject<CatalogFilter>({});

  filters$ = this.filtersSubject.asObservable();

  /** Actualiza un filtro específico */
  setFilters(filters: CatalogFilter) {
    this.filtersSubject.next(filters);
  }

  getFilters(): CatalogFilter {
    return this.filtersSubject.value;
  }
}
