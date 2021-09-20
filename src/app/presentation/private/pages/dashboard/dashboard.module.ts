import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersBoardComponent } from './pages/users-board/users-board.component';
import { CoursesBoardComponent } from './pages/courses-board/courses-board.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersBoardComponent,
    CoursesBoardComponent,
    DashboardSidebarComponent,
    CoursesTableComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
