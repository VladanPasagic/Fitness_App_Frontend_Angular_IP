import { Routes } from '@angular/router';
import { StartPageComponent } from './Pages/start-page/start-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { AdvicePageComponent } from './Pages/advice-page/advice-page.component';

export const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'advice',
    component: AdvicePageComponent,
  },
  {
    path: 'journal',
    children: [
      {
        path: 'add',
        component: AdvicePageComponent,
      },
    ],
  },
  {
    path: 'fitness-program',
    children: [
      {
        path: 'add',
        component: AdvicePageComponent,
      },
      {
        path: ':id',
        component: AdvicePageComponent,
      },
    ],
  },
];
