import { Routes } from '@angular/router';
import { GiveComponent } from './views/give/give.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dar', component: GiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];