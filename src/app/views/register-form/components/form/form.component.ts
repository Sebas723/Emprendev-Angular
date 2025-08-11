import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Validadores
import { minAgeValidator } from '../../../../shared/form-validators/age-validator';
import { matchFieldsValidator } from '../../../../shared/form-validators/match-fields-validator';
import { PATTERNS } from '../../../../shared/form-validators/pattern-validators/pattern';

type Field = {
  key: string;
  label: string;
  placeholder?: string;
  type?: string;
  options?: string[]; // Para selects
};

type Step = {
  label: string;
  fields: Field[];
};

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

steps: Step[] = [
  // Inputs para el primer steper
  {
    label: 'Informacion de contacto',
    fields: [
      { key: 'firstName', label: 'Primer nombre *', placeholder: 'Ingresa tu primer nombre' },
      { key: 'secondName', label: 'Segundo nombre', placeholder: 'Ingresa tu segundo nombre' },
      { key: 'firstSurname', label: 'Primer apellido *', placeholder: 'Ingresa tu primer apellido' },
      { key: 'secondSurname', label: 'Segundo apellido', placeholder: 'Ingresa tu segundo apellido' },
    ]
  },
  // Inputs para el segundo steper
  {
    label: 'Informacion de contacto',
    fields: [
      { key: 'docType', label: 'Tipo de documento *', type: 'select', options: ['C.C', 'C.E', 'Pasaporte'] },
      { key: 'docNum', label: 'Numero de documento *', placeholder: 'Ingresa tu numero de documento', type: 'text' },
      { key: 'birthDate', label: 'Fecha de nacimiento *', type: 'date' },
      { key: 'role', label: 'Rol', type: 'select', options: ['Desarrollador', 'Mipyme'] }
    ]
  },
  // Inputs para el tercer steper
  {
    label: 'Informacion de contacto',
    fields: [
      { key: 'phone', label: 'Telefono *', placeholder: 'Ingresa tu numero de telefono', type: 'text' },
      { key: 'address', label: 'Direccion', placeholder: 'Ingresa tu direccion', type: 'text' },
      { key: 'email', label: 'Correo electronico *', placeholder: 'correo@ejemplo.com', type: 'email' },
      { key: 'password', label: 'Contraseña *', placeholder: 'Mínimo 8 caracteres', type: 'password' },
      { key: 'confirmPassword', label: 'Confirmar contraseña *', placeholder: 'Mínimo 8 caracteres', type: 'password' },
    ]
  }
];

  current = signal(0);

  private fb = inject(FormBuilder);

  form = this.fb.group({
    firstName: ['', Validators.required],
    secondName: [''],
    firstSurname: ['', Validators.required],
    secondSurname: [''],
    docType: ['', Validators.required],
    docNum: ['', [Validators.required, Validators.pattern(PATTERNS.DOC_NUM.regex)]],
    birthDate: ['', [Validators.required, minAgeValidator(18)]],
    role: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(PATTERNS.PHONE.regex)]],
    address: [''],
    email: ['', [Validators.required, Validators.pattern(PATTERNS.EMAIL.regex)]],
    password: ['', [Validators.required, Validators.pattern(PATTERNS.PASSWORD.regex)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(PATTERNS.PASSWORD.regex)]],
  },
  { validators: matchFieldsValidator('password', 'confirmPassword') }
);

  get currentKey() {
    return this.steps[this.current()].fields[0].key;
  }

  get currentControl() {
    return this.form.get(this.currentKey)!;
  }

  // No permitir saltar pasos si los previos no son válidos
  canGoTo(index: number) {
    return this.steps
      .slice(0, index)
      .every(step =>
        step.fields.every(field => this.form.get(field.key)?.valid)
      );
  }

  goTo(index: number) {
    if (index === this.current()) return;
    if (this.canGoTo(index)) {
      this.current.set(index);
    } else {
      this.steps
      .slice(0, index)
      .every(step =>
        step.fields.every(field => this.form.get(field.key)?.markAsTouched()));
    }
  }

  next() {
    const currentFields = this.steps[this.current()].fields;
    const invalidField = currentFields.some(f => this.form.get(f.key)?.invalid);

    if (invalidField) {
      currentFields.forEach(f => this.form.get(f.key)?.markAsTouched());
      return;
    }

    if (this.current() < this.steps.length - 1) {
      this.current.set(this.current() + 1);
    }
  }

  prev() {
    if (this.current() > 0) {
      this.current.set(this.current() - 1);
    }
  }

  finish() {
    // Marca todo para mostrar errores si hiciera falta.
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    // Aquí envías los datos
    console.log('Datos del formulario:', this.form.value);
    alert('Formulario válido. ¡Listo para enviar!');
  }

  errorFor(key: string): string | null {
    const c = this.form.get(key);
    if (!c || !c.touched || !c.invalid) return null;
    const e = c.errors!;

    if (e['required']) return 'Este campo es obligatorio';
    if (e['minlength']) return `Mínimo ${e['minlength'].requiredLength} caracteres`;
    
    if (e['pattern']) {
      switch (key) {
        case 'docNum': return PATTERNS.DOC_NUM.message;
        case 'phone': return PATTERNS.PHONE.message;
        case 'email': return PATTERNS.EMAIL.message;
        case 'password': return PATTERNS.PASSWORD.message;
        default: return 'Formato inválido';
      }
    }

    if (e['futureDate']) return 'La fecha no puede estar en el futuro';
    if (e['minAge']) return `Debes tener al menos ${e['minAge'].requiredAge} años`;
    if (e['fieldsNotMatch']) return 'La contraseña no coincide';

    return 'Valor inválido';
  }
}
