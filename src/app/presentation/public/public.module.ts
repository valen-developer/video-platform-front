import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';

@NgModule({
  declarations: [PublicComponent, HomeComponent, CourseCardComponent, CourseGridComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
