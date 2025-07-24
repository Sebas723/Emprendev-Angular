import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CatalogsSectionDemoComponent } from './catalogs-section-demo/catalogs-section-demo.component';
import { CatalogDevsComponent } from './catalogs-section-demo/catalog-devs/catalog-devs.component';

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
        path: 'login',
        component: LoginFormComponent,
    },
    {
        path: 'catalogs',
        component: CatalogsSectionDemoComponent,
    },
    {
        path: 'catalog-devs',
        component: CatalogDevsComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
