import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./presentation/public/public.module').then((m) => m.PublicModule),
  },
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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
