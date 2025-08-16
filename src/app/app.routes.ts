import {ResolveFn, Routes} from '@angular/router';
import {UsernameForm} from './username-form/username-form';
import {Home} from './home/home';
import {UserDetail} from './username-form/user-detail/user-detail';

const homePage = {
  path: '',
  component: Home,
  title: 'ciao ciao'
}

const titleResolver: ResolveFn<string> = (route) => route.params['id'];


export const routes: Routes = [
  homePage, // Route di default
  {
    path: 'users/:id',
    component: UsernameForm,
    // loadComponent: () => import('./username-form/username-form').then(m => m.UsernameForm),
    title: titleResolver,
    data: { data: 'data test' },
    children: [
      {
        path: 'detail',
        component: UserDetail,
      }
    ]
  },
  { path: '**', redirectTo: '' }

];
