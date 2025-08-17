import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchInputFilterService } from '../../services/search-input-filter.service';

@Component({
  selector: 'app-catalog-navbar',
  imports: [FormsModule],
  templateUrl: './catalog-navbar.component.html',
  styleUrl: './catalog-navbar.component.css'
})
export class CatalogNavbarComponent {

  searchText: string = '';

  constructor(
    public router: Router,
    private searchInputFilterService: SearchInputFilterService
  ) {}

  onSearchInput(searchText: string) {
    this.searchInputFilterService.setSearchText(searchText);
    console.log(this.searchInputFilterService.getSearchText());
  }

}
