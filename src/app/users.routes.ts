import {ResolveFn, Routes} from '@angular/router';
import {Home} from './home/home';

const titleResolver: ResolveFn<string> = (route) => route.params['id'];

export const USERS_ROUTES: Routes = [
  {
    path: ':id',
    loadComponent: () => import('./username-form/username-form').then(m => m.UsernameForm),
    // title: (route) => route.params['id'],
    title: titleResolver,
    data: { data: 'data test' },
    children: [
      {
        path: 'detail',
        loadComponent: () => import('./username-form/user-detail/user-detail').then(m => m.UserDetail),
      }
    ]
  }
];
