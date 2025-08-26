import { Component } from '@angular/core';

//interfaces
import { TemplateAdminStats } from '../../../../interfaces/TemplateAdminStats';

@Component({
  selector: 'app-admin-stats',
  imports: [],
  templateUrl: './admin-stats.component.html',
  styleUrl: './admin-stats.component.css'
})
export class AdminStatsComponent {

  stats: TemplateAdminStats[] = [
    { id: 1, title: 'Total usuarios', value: 25, text: 'Usuarios', icon: 'pi pi-users' },
    { id: 2, title: 'Usuarios inactivos', value: 25, text: 'Usuarios', icon: 'pi pi-ban' },
    { id: 3, title: 'Total desarrolladores', value: 25, text: 'Desarrolladores', icon: 'pi pi-code' },
    { id: 4, title: 'Total Mipymes', value: 25, text: 'Mipymes', icon: 'pi pi-building' },
    { id: 5, title: 'Total ofertas', value: 25, text: 'Ofertas', icon: 'pi pi-briefcase' },
  ]
}
