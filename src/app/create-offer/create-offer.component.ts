import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TecnologiesTag, tecnologies } from '../interfaces/tecnologies-tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-offer',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent {
  
  // Variable para la vista previa de las imágenes
  previewUrls: string[] = [];

  // Variables para la seleccion de tecnologias
  searchTecnology: string = '';
  filteredTecnologies: TecnologiesTag[] = [];
  selectedTecnologies: TecnologiesTag[] = [];

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
    console.log(this.previewUrls);
  }

}
