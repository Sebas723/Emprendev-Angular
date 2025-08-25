import { Component } from '@angular/core';

//components
import { NavigationSidebarComponent } from '../../shared/components/navigation-sidebar/navigation-sidebar.component';
import { AdminStatsComponent } from './components/admin-stats/admin-stats.component';

@Component({
  selector: 'app-admin-panel',
  imports: [
    NavigationSidebarComponent,
    AdminStatsComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
