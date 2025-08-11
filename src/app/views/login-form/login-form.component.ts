import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormComponent, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {


}
