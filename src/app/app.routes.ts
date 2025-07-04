import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
