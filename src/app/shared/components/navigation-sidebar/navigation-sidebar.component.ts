import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { NavigationSidebar } from '../../../interfaces/NavigationSidebar';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [RouterLink],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.css'
})
export class NavigationSidebarComponent {

  // Sidebar items
  sidebarItems: NavigationSidebar[] = [
    {
      id: 1, 
      title: 'Menu principal', 
      items: [
        {icon: 'pi pi-briefcase', text: 'Ofertas', route: '/catalog-offer'},
        {icon: 'pi pi-users', text: 'Desarrolladores', route: '/catalog-devs'},
      ],
    },
    {
      id: 2, 
      title: 'General',
      items: [
        {icon: 'pi pi-wrench', text: 'Ayuda'},
        {icon: 'pi pi-external-link', text: 'Terminos de uso'},
      ],
    },
    {
      id: 3, 
      title: 'Mi cuenta',
      items: [
        {icon: 'pi pi-user', text: 'Mi perfil', route: '/user-profile'},
        {icon: 'pi pi-send', text: 'Mis solicitudes'},
        {icon: 'pi pi-sign-out', text: 'Cerrar sesión'},
      ],
    },
  ]
}
