import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Interfaces
import { OfferPreview } from '../interfaces/OfferPreview';
import { TecnologiesTag, tecnologies } from '../interfaces/tecnologiesTag';

@Component({
  selector: 'app-create-offer',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent {
  // Inyeccion para usar FormBuilder
  fb = inject(FormBuilder);

  // Variables para la seleccion de tecnologias
  searchTecnology: string = '';
  filteredTecnologies: TecnologiesTag[] = [];
  selectedTecnologies: TecnologiesTag[] = [];

  // Variable para la vista previa de las imágenes
  previewUrls: string[] = [];

  //Variable para la vista previa de la tarjeta de oferta
  offerPreview: OfferPreview = {
    images: [],
    title: '',
    subtitle: '',
    description: '',
  }

  // Formulario de creación de oferta
  offerForm: FormGroup = this.fb.group({
    images: [[], Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    tecnologies: [[], Validators.required],
    pay: ['', Validators.required],
    vacancies: ['', Validators.required],
  })

  //Esta funcion permite el envio de datos del formulario
  onSubmit() {
    this.offerForm.patchValue({
      tecnologies: this.selectedTecnologies.map(t => t.name),
      images: this.previewUrls.map(url => url)
    })

    console.log(this.offerForm.value);
    console.log("Intentando enviar oferta...");
  }


  //Esta funcion se encarga de filtrar las tecnologias según el texto ingresado en el input
  search(): void {
    if (this.searchTecnology === '') {
      this.filteredTecnologies = [];
      return;
    }
    this.filteredTecnologies =  tecnologies.filter(item => item.name.toUpperCase().includes(this.searchTecnology.toLocaleUpperCase()));

    for(let tecnology of this.selectedTecnologies) {
      this.filteredTecnologies = this.filteredTecnologies.filter(item => item.id != tecnology.id)
    }
  }

  // Esta funcion se encarga de agregar una tecnologia a la lista de tecnologias seleccionadas
  selectTecnology(tecnology : TecnologiesTag): void {
    this.selectedTecnologies.push(tecnology);
    this.filteredTecnologies = [];
    this.searchTecnology = '';
  }

  //Esta funcionm se encarga de eliminar una tecnologia de la lista de tecnologias seleccionadas
  removeTecnology(tecnology : TecnologiesTag): void {
    this.selectedTecnologies = this.selectedTecnologies.filter(item => item.id !== tecnology.id);
    this.filteredTecnologies = [];
    this.searchTecnology = '';
  }

  //Esta funcion se encarga de subir las imágenes seleccionadas, asignarlar a una vista previa y limitar el numero de imágenes a 4
  handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files) return;

    const selectedFiles = Array.from(input.files);

    // Limita el total de imágenes a 4 (las actuales + las nuevas)
    const availableSlots = 4 - this.previewUrls.length;
    const filesToAdd = selectedFiles.slice(0, availableSlots);

    let filesProcessed = 0;
    for (const file of filesToAdd) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrls.push(reader.result as string);
        filesProcessed++;

        this.offerPreview.images = [...this.previewUrls];

        // Limpia el input para que pueda volver a seleccionar el mismo archivo si quiere
        if (filesProcessed === filesToAdd.length) {
          input.value = ''; 
        }
      };
      reader.readAsDataURL(file);
    }
    console.log(this.previewUrls);
  }

  //Esta funcion se encarga de eliminar una imagen de la vista previa y de la lista de imágenes para visualizar
  removeImage(index: number): void {
    this.previewUrls.splice(index, 1);
    this.offerPreview.images = [...this.previewUrls];
    console.log(this.previewUrls);
  }

  // Esta funcion se encarga de obtener el valor de los campos de la oferta y de actualizar la vista previa
  ngOnInit(): void {
    const fieldsToPreview: (keyof OfferPreview)[] = ['images', 'title', 'subtitle', 'description'];

    fieldsToPreview.forEach(field => {
      this.offerForm.get(field)?.valueChanges.subscribe(value => {
        this.offerPreview[field] = value;
      });

      // Inicializar por si el formulario ya tiene valores cargados
      this.offerPreview[field] = this.offerForm.get(field)?.value;
    });

    console.log(this.offerPreview.images)
    console.log(this.offerPreview);
  }


  //Esta función calcula cuantos campos del formulario han sido llenados correctamente segun el FormGroup.
  get completedFields(): number {
    let filled = 0;
    const controls = this.offerForm.controls;
    for (const key in controls) {
      if (controls[key].value && controls[key].valid) {
        filled++;
      }
    }

    if(this.selectedTecnologies.length > 0) {
      filled++;
    }

    if(this.previewUrls.length > 0) {
      filled++;
    }

    return filled;
  }

  //Esta función calcula el total de campos del formulario
  get totalFields(): number {
    return Object.keys(this.offerForm.controls).length;
  }
}
