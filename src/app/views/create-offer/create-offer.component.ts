import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Componentes
import { InfoCardComponent } from './components/info-card/info-card.component';

// Interfaces
import { tecnologies, TecnologiesTag } from '../../interfaces/tecnologiesTag';
import { OfferPreview } from '../../interfaces/OfferPreview';
import { TemplateInfoFormCard } from '../../interfaces/TemplateInfoFormCard';

@Component({
  selector: 'app-create-offer',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InfoCardComponent
  ],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent {

  //Variable para la tarjeta de consejos y recordatorios
  infoFormCard: TemplateInfoFormCard[] = [
    //Arreglo para la tarjeta de consejos
    { titleIcon: 'pi pi-lightbulb text-yellow-500', title: 'Consejos', subtitleOne: 'Consejos generales', 
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

    //Arreglo para la tarjeta de recordatorios
    { titleIcon: 'pi pi-lightbulb text-yellow-500', title: 'Recordatorios', subtitleOne: 'Recordatorios generales', 
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
  ]

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
    // Actualiza manualmente los campos antes de validar
    this.offerForm.patchValue({
      tecnologies: this.selectedTecnologies.map(t => t.name),
      images: this.previewUrls.map(url => url)
    });

    // Forzar validación
    this.offerForm.updateValueAndValidity();

    // Verificar validez
    if (this.offerForm.valid) {
      console.log("Formulario válido");
      console.log(this.offerForm.value);
    } else {
      console.log("Formulario inválido");
      console.log(this.offerForm.errors);
    }
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
