import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/application/guards/login.guard';

import { CourseViewComponent } from './pages/course-view/course-view.component';

import { HomeComponent } from './pages/home/home.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'course', component: CourseViewComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
