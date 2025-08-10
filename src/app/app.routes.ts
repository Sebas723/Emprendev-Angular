import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CatalogOfferComponent } from './views/catalog-offer/catalog-offer.component';
import { CatalogDevsComponent } from './views/catalog-devs/catalog-devs.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { CreateOfferComponent } from './views/create-offer/create-offer.component';

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
        path: 'catalog-offer',
        component: CatalogOfferComponent,
    },
    {
        path: 'create-offer',
        component: CreateOfferComponent,
    },
    {
        path: 'catalog-devs',
        component: CatalogDevsComponent,
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
