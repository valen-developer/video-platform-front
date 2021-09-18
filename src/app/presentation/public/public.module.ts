import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Video Player
import { VimeModule } from '@vime/angular';

import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoRepository } from 'src/app/domain/Video/interfaces/VideoRepository';
import { ApiVideoRepositoryService } from 'src/app/infrastructure/repositories/api-video-repository.service';
import { SectionsAccordionComponent } from './components/sections-accordion/sections-accordion.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    CourseCardComponent,
    CourseGridComponent,
    CourseViewComponent,
    VideoPlayerComponent,
    SectionsAccordionComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, VimeModule],
  providers: [],
})
export class PublicModule {}
