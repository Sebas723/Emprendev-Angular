import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-register-form',
  imports: [RouterLink, FormComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
}
