import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-progress.component.html',
})
export class OfferProgressComponent {
  @Input({ required: true }) completedFields!: number;
  @Input({ required: true }) totalFields!: number;

  get progressPercent(): number {
    if (!this.totalFields) return 0;
    return (this.completedFields / this.totalFields) * 100;
  }
}