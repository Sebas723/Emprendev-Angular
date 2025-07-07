import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutUsSectionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
