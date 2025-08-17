import {ResolveFn, Routes} from '@angular/router';
import {UsernameForm} from './username-form/username-form';
import {Home} from './home/home';
import {UserDetail} from './username-form/user-detail/user-detail';




export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'ciao ciao'
  },
  {
    path: 'users',
    loadChildren: () => import('./users.routes').then(m => m.USERS_ROUTES),
  },
  { path: '**', redirectTo: '' }

];


