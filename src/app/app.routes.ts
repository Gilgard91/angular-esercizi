import {ResolveFn, Routes} from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {Home} from './home/home';
import {Detail} from './dashboard/detail/detail';




export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'ciao ciao'
  },
  {
    path: 'users',
    loadChildren: () => import('./dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  },
  { path: '**', redirectTo: '' }

];


