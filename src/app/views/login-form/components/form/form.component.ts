import { Component, inject } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthServiceTsService } from '../../service/auth.service.ts.service';
import { Router, RouterLink } from '@angular/router';

// interface
import { InputFormTemplate } from '../../../../interfaces/InputFormTemplate';

@Component({
  selector: 'app-form',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  inputLoginForm: InputFormTemplate[] = [
    { key: 'email', label: 'Correo electronico *', placeholder: 'correo@ejemplo.com', type: 'email' },
    { key: 'password', label: 'Contraseña *', placeholder: 'Mínimo 8 caracteres', type: 'password' },
  ];

    fb = inject(FormBuilder);
    router = inject(Router);
    authService = inject(AuthServiceTsService);

    loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
  );

  errorFor(key: string): string | null {
    const c = this.loginForm.get(key);
    if (!c || !c.touched || !c.invalid) return null;
    const e = c.errors!;

    if (e['required']) return 'Este campo es obligatorio';

    return 'Valor inválido';
  }

  onSubmit() {
    // Marca todo para mostrar errores si hiciera falta.
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    console.log("Intentando enviar login...");

    if (this.loginForm.valid) {
      console.log("Formulario válido");
      const loginData = this.loginForm.value;

      this.authService.loginUser({
        email: loginData.email ?? '',
        password: loginData.password ?? '',
      }).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          this.router.navigate(['/home']); // o cualquier ruta
        },
        error: (error) => {
          console.error('Error en el login:', error);
          alert('Credenciales incorrectas o usuario inactivo');
        }
      });
    } else {
      console.log("Formulario inválido:", this.loginForm.errors);
    }
  }
}
