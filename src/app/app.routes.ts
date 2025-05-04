import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { ServicesComponent } from './services/services.component';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  //   title: 'Login',
  // },
  {
    // lazy loading
    path: 'singin',
    title: 'Login',
    loadComponent: () =>
      import('./signin/signin.component').then((c) => c.SigninComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    title: 'Home',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((c) => c.ProfileComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
    title: 'About',
  },
  {
    path: 'dashboard',
    children: [
      {
        path: 'counter',
        component: CounterComponent,
        title: 'Counter',
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'Services',
      },
    ],
  },
  {
    path: 'details/:id',
    component: ServiceDetailsComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    title: 'Todos',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users',
  },

  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },
];
