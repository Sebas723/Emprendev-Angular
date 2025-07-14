import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    docType: ['', [Validators.required]],
    docNum: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
    birthDate: ['', [Validators.required]],
    role: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password:  ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/)]],
    confirmPassword: ['', [Validators.required]],
  });

  onSubmit() {
    console.log('datos enviados: ', this.form.value);
  }
}
