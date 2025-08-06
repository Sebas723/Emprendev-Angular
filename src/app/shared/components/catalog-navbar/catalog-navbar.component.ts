import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-navbar',
  imports: [],
  templateUrl: './catalog-navbar.component.html',
  styleUrl: './catalog-navbar.component.css'
})
export class CatalogNavbarComponent {

  constructor(public router: Router) {}

}
