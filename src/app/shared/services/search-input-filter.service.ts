import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputFilterService {

  private searchTextSubject = new BehaviorSubject<string>('');

  searchText$ = this.searchTextSubject.asObservable();

  /** Actualiza el filtro de búsqueda */
  setSearchText(searchText: string) {
    this.searchTextSubject.next(searchText);
  }

  getSearchText(): string {
    return this.searchTextSubject.value.toLowerCase();
  }
}
