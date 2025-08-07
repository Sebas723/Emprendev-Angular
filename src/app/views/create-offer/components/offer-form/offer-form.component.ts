import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Interfaces (ajusta rutas)
import { TecnologiesTag } from '../../../../interfaces/tecnologiesTag';

@Component({
  selector: 'app-offer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './offer-form.component.html',
})
export class OfferFormComponent {
  @Input({ required: true }) form!: FormGroup;

  // Estado controlado por el contenedor
  @Input() previewUrls: string[] = [];
  @Input() selectedTecnologies: TecnologiesTag[] = [];
  @Input() filteredTecnologies: TecnologiesTag[] = [];
  @Input() searchTecnology = '';

  // Eventos al contenedor
  @Output() searchTecnologyChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();
  @Output() selectTecnology = new EventEmitter<TecnologiesTag>();
  @Output() removeTecnology = new EventEmitter<TecnologiesTag>();
  @Output() uploadImages = new EventEmitter<Event>();
  @Output() removeImageIndex = new EventEmitter<number>();
  @Output() submitForm = new EventEmitter<void>();

  onSubmit(): void {
    this.submitForm.emit();
  }

  onSearchInput(value: string): void {
    this.searchTecnologyChange.emit(value);
    this.search.emit();
  }

  onFileChange(event: Event): void {
    this.uploadImages.emit(event);
  }

  removeImage(index: number): void {
    this.removeImageIndex.emit(index);
  }
}