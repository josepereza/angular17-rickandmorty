import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'home', pathMatch:'full',
        title: 'Home details',
      },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      },
    {
        path: 'details/:id',
        component: DetallesComponent,
        title: 'Home details',
      },

];
