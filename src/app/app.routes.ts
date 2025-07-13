import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'register',
        component: RegisterFormComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
