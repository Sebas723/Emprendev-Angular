import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-info-card',
  imports: [CommonModule],
  templateUrl: './sidebar-info-card.component.html',
  styleUrl: './sidebar-info-card.component.css'
})
export class SidebarInfoCardComponent {
  isSidebarOpen: boolean = false;
}
