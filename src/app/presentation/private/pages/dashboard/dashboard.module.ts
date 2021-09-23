import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../../../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersBoardComponent } from './pages/users-board/users-board.component';
import { CoursesBoardComponent } from './pages/courses-board/courses-board.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CourseEditorComponent } from './pages/course-editor/course-editor.component';
import { CourseEditorImageComponent } from './components/course-editor-image/course-editor-image.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersBoardComponent,
    CoursesBoardComponent,
    DashboardSidebarComponent,
    CoursesTableComponent,
    CourseEditorComponent,
    CourseEditorImageComponent,
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class DashboardModule {}
