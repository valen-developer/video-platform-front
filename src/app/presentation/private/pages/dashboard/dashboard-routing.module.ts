import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CoursesBoardComponent } from './pages/courses-board/courses-board.component';
import { UsersBoardComponent } from './pages/users-board/users-board.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'users', component: UsersBoardComponent },
      { path: 'courses', component: CoursesBoardComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'users' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
