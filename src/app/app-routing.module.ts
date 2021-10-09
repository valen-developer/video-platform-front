import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './application/guards/login.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./presentation/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./presentation/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./presentation/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
