import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Interface para los elementos de navegacion de la navbar
interface Navbar {
  id: number;
  title: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  //Variable para la renderizacion de los elementos de la navbar
  navbarItems: Navbar[] = [
    { id: 1, title: 'Inicio', sectionId: 'scroll-anchor-home' },
    { id: 2, title: 'Acerca de Nosotros', sectionId: 'about-us' },
    { id: 3, title: 'Nuestros Servicios', sectionId: 'our-services' },
    { id: 4, title: 'Contáctanos', sectionId: 'contact-us' },
  ];
  
  //Variable para controlar el estado del menú dropdown
  menuOpen = false;

  // Evento para abrir menú dropdown
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Evento para cerrar menú dropdown
  closeMenu() {
    this.menuOpen = false;
  }

  // Evento para desplazarse a la sección indicada en el home-page
  scrollTo(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
