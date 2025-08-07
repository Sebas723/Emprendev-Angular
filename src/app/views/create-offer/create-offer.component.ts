import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Componentes hijos
import { OfferFormComponent } from './components/offer-form/offer-form.component';
import { OfferPreviewComponent } from './components/offer-preview/offer-preview.component';
import { OfferProgressComponent } from './components/offer-progress/offer-progress.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

// Interfaces (ajusta la ruta si difiere en tu proyecto)
import { TemplateInfoFormCard } from '../../interfaces/TemplateInfoFormCard';
import { TecnologiesTag, tecnologies } from '../../interfaces/tecnologiesTag';
import { OfferPreview } from '../../interfaces/OfferPreview';

@Component({
  selector: 'app-create-offer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfoCardComponent,
    OfferFormComponent,
    OfferPreviewComponent,
    OfferProgressComponent,
  ],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css',
})
export class CreateOfferComponent implements OnInit {
  // Tarjetas de consejos/recordatorios
  infoFormCard: TemplateInfoFormCard[] = [
    {
      titleIcon: 'pi pi-lightbulb text-orange-500',
      title: 'Consejos',
      subtitleOne: 'Consejos generales',
      textOne: [
        { textIcon: 'pi pi-check-circle mt-1 text-green-500', text: 'Completa todos los campos' },
        { textIcon: 'pi pi-check-circle mt-1 text-green-500', text: 'Revisa la información antes de enviar' },
        { textIcon: 'pi pi-check-circle mt-1 text-green-500', text: 'Usa información precisa y actualizada' },
        { textIcon: 'pi pi-check-circle mt-1 text-green-500', text: 'Considera cómo verán otros tu información' },
      ],
      subtitleTwo: 'Nota',
      textTwo: [
        { textIcon: 'pi pi-info-circle mt-1 text-blue-500', text: ' Una oferta clara y concisa es más fácil de entender para los usuarios.' },
      ],
    },
    {
      titleIcon: 'pi pi-lightbulb text-red-500',
      title: 'Recordatorios',
      subtitleOne: 'Recordatorios generales',
      textOne: [
        { textIcon: 'pi pi-check-circle mt-1 text-green-500', text: 'En el lateral derecho puedes ver una vista previa de tu oferta' },
        { textIcon: 'pi pi-check-circle mt-1 text-green-500', text: 'Tenemos para ti una barra de progreso para que ver como está avanzando la creacion tu oferta' },
      ],
      subtitleTwo: 'Nota',
      textTwo: [
        { textIcon: 'pi pi-info-circle mt-1 text-blue-500', text: 'Nuestros administradores pueden eliminar o desactivar ofertas que no sean adecuadas' },
        { textIcon: 'pi pi-info-circle mt-1 text-blue-500', text: 'Si no cumples con nuestras politicas de conducta tu cuenta podria ser bloqueada' },
      ],
    },
  ];

  // Reactive form
  fb = inject(FormBuilder);
  offerForm: FormGroup = this.fb.group({
    images: [[], Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    tecnologies: [[], Validators.required],
    pay: ['', Validators.required],
    vacancies: ['', Validators.required],
    // Si decides usar "subtitle" en la vista previa, descomenta:
    // subtitle: [''],
  });

  // Estado (se mantiene en el contenedor)
  searchTecnology = '';
  filteredTecnologies: TecnologiesTag[] = [];
  selectedTecnologies: TecnologiesTag[] = [];
  previewUrls: string[] = [];

  // Vista previa
  offerPreview: OfferPreview = {
    images: [],
    title: '',
    subtitle: '',
    description: '',
  };

  // Progress getters (o signals/computed si prefieres)
  get completedFields(): number {
    let filled = 0;
    const controls = this.offerForm.controls;
    for (const key in controls) {
      if (controls[key].value && controls[key].valid) filled++;
    }
    if (this.selectedTecnologies.length > 0) filled++;
    if (this.previewUrls.length > 0) filled++;
    return filled;
  }

  get totalFields(): number {
    return Object.keys(this.offerForm.controls).length;
  }

  ngOnInit(): void {
    const fieldsToPreview: (keyof OfferPreview)[] = ['images', 'title', 'subtitle', 'description'];
    fieldsToPreview.forEach((field) => {
      this.offerForm.get(field as string)?.valueChanges.subscribe((value) => {
        this.offerPreview[field] = value;
      });
      this.offerPreview[field] = this.offerForm.get(field as string)?.value;
    });
  }

  // Submit
  onSubmit(): void {
    // Asegura que el form tenga los arrays de tecnologías e imágenes
    this.offerForm.patchValue({
      tecnologies: this.selectedTecnologies.map((t) => t.name),
      images: this.previewUrls.slice(),
    });
    this.offerForm.updateValueAndValidity();

    if (this.offerForm.valid) {
      console.log('Formulario válido');
      console.log(this.offerForm.value);
    } else {
      console.log('Formulario inválido');
      console.log(this.offerForm.errors);
    }
  }

  // Tecnologías
  search(): void {
    if (this.searchTecnology === '') {
      this.filteredTecnologies = [];
      return;
    }
    this.filteredTecnologies = tecnologies.filter((item) =>
      item.name.toUpperCase().includes(this.searchTecnology.toLocaleUpperCase()),
    );
    for (const tecnology of this.selectedTecnologies) {
      this.filteredTecnologies = this.filteredTecnologies.filter((item) => item.id !== tecnology.id);
    }
  }

  selectTecnology(tecnology: TecnologiesTag): void {
    this.selectedTecnologies.push(tecnology);
    this.filteredTecnologies = [];
    this.searchTecnology = '';
    // Refleja en el form (opcional)
    this.offerForm.patchValue({ tecnologies: this.selectedTecnologies.map((t) => t.name) });
  }

  removeTecnology(tecnology: TecnologiesTag): void {
    this.selectedTecnologies = this.selectedTecnologies.filter((item) => item.id !== tecnology.id);
    this.filteredTecnologies = [];
    this.searchTecnology = '';
    this.offerForm.patchValue({ tecnologies: this.selectedTecnologies.map((t) => t.name) });
  }

  // Imágenes
  handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    const selectedFiles = Array.from(input.files);
    const availableSlots = 4 - this.previewUrls.length;
    const filesToAdd = selectedFiles.slice(0, availableSlots);

    let filesProcessed = 0;
    for (const file of filesToAdd) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrls.push(reader.result as string);
        filesProcessed++;
        this.offerPreview.images = [...this.previewUrls];
        if (filesProcessed === filesToAdd.length) {
          input.value = '';
        }
        // sincroniza con form
        this.offerForm.patchValue({ images: this.previewUrls.slice() });
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    this.previewUrls.splice(index, 1);
    this.offerPreview.images = [...this.previewUrls];
    this.offerForm.patchValue({ images: this.previewUrls.slice() });
  }
}