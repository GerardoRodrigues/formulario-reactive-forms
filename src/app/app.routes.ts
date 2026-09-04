import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  {
    path: 'personal',
    loadComponent: () =>
      import('./features/user-informations/pages/step-personal/step-personal').then(
        (m) => m.StepPersonal,
      ),
  },
  {
    path: 'professional',
    loadComponent: () =>
      import('./features/user-informations/pages/step-professional/step-professional').then(
        (m) => m.StepProfessional,
      ),
  },
  {
    path: 'resume-informations',
    loadComponent: () =>
      import('./features/user-informations/pages/resume-informations/resume-informations').then(
        (m) => m.ResumeInformations,
      ),
  },
  {
    path: '**',
    redirectTo: 'personal',
    pathMatch: 'full',
  },
];
