import { Routes } from '@angular/router';
import { StartPageComponent } from './Pages/start-page/start-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { AdvicePageComponent } from './Pages/advice-page/advice-page.component';
import { UserProfilePageComponent } from './Pages/user-profile-page/user-profile-page.component';
import { guard } from './Configuration/guard.guard';
import { JournalPageComponent } from './Pages/journal-page/journal-page.component';
import { FitnessProgramsPageComponent } from './Pages/fitness-programs-page/fitness-programs-page.component';
import { FitnessProgramPageComponent } from './Pages/fitness-program-page/fitness-program-page.component';
import { FitnessProgramFormComponent } from './Components/Forms/fitness-program-form/fitness-program-form.component';
import { LogoutComponent } from './Components/logout/logout.component';

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
    canActivate: [guard],
  },
  {
    path: 'journal',
    children: [
      {
        path: '',
        component: JournalPageComponent,
        canActivate: [guard],
      },
      {
        path: 'add',
        component: AdvicePageComponent,
        canActivate: [guard],
      },
    ],
  },
  {
    path: 'fitness-program',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FitnessProgramsPageComponent,
      },
      {
        path: 'add',
        component: FitnessProgramFormComponent,
        canActivate: [guard],
      },
      {
        path: ':id',
        component: FitnessProgramPageComponent,
      },
    ],
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate: [guard],
  },
];
