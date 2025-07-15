import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthServiceTsService } from './service/auth.service.ts.service';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  formBuiulder = inject(FormBuilder);
  authService = inject(AuthServiceTsService);
  router = inject(Router);

  loginForm: FormGroup = this.formBuiulder.group({
    email: ['', [Validators.required, Validators.email]],
    password:  ['', [Validators.required]],

  });

onSubmit() {
  console.log("Intentando enviar login...");

  if (this.loginForm.valid) {
    console.log("Formulario válido");
    const loginData = this.loginForm.value;

    this.authService.loginUser(loginData).subscribe({
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
