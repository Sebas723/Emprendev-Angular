import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-update-form',
  imports: [CommonModule],
  templateUrl: './user-update-form.component.html',
  styleUrl: './user-update-form.component.css'
})
export class UserUpdateFormComponent {

  userUpdateForm = [
    // Inputs para el formulario desplegable de datos personales 
    {id: 1, state: true, icon: 'pi pi-user', title: 'Datos personales', 
      formInputs: [
      {label: 'Primer nombre', type: 'text', value: 'Hola mundo', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Segundo nombre', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Primer apellido', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Segundo apellido', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Fecha de nacimiento', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Tipo de documento', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Numero de documento', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Numero de telefono', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Direccion', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Correo electronico', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Descripción del perfil', type: 'textarea', placeholder: 'Describe la oferta'},
    ]},

    // Inputs para el formulario desplegable de experiencia laboral
    {id: 2, state: false, icon: 'pi pi-briefcase', title: 'Experiencia Laboral',
      formInputs: [
      {label: 'Cargo', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Empresa', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Fecha de inicio', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Fecha de finalizacion', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Descripción del cargo', type: 'textarea', placeholder: 'Describe la oferta'},
    ]},

    // Inputs para el formulario desplegable de educacion
    {id: 3, state: false, icon: 'pi pi-graduation-cap', title: 'Educacion',
      formInputs: [
      {label: 'Universidad', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Carrera', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Fecha de inicio', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Fecha de finalizacion', type: 'text', placeholder: 'Ingresa el título de la oferta'},
      {label: 'Descripción de la carrera', type: 'textarea', placeholder: 'Describe la oferta'},
    ]},
  ]

  //Abrir y cerrar formularios
  toggleForm(id: number) {
    this.userUpdateForm.forEach(form => {
      if(form.id === id) {
        form.state = !form.state;
      }
    });
  }
}
