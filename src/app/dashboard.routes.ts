import {ResolveFn, Routes} from '@angular/router';
import {Home} from './home/home';

const titleResolver: ResolveFn<string> = (route) => route.params['id'];

export const DASHBOARD_ROUTES: Routes = [
  {
    path: ':id',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
    // title: (route) => route.params['id'],
    title: titleResolver,
    data: { data: 'data test' },
    children: [
      {
        path: 'detail',
        loadComponent: () => import('./dashboard/detail/detail').then(m => m.Detail),
      }
    ]
  }
];
