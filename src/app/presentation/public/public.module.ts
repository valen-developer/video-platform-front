import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Video Player
import { VimeModule } from '@vime/angular';

// Modules
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SectionsAccordionComponent } from './components/sections-accordion/sections-accordion.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PlayingAnimationComponent } from './components/playing-animation/playing-animation.component';

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
    PlayingAnimationComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, VimeModule, SharedModule],
  providers: [],
})
export class PublicModule {
  constructor() {
    console.log('carga public module');
  }
}
