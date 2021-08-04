import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseRepository } from './domain/Course/interfaces/CourseRepository';
import { ApiCourseRepositoryService } from './infrastructure/repositories/api-course-repository.service';
import { VideoRepository } from './domain/Video/interfaces/VideoRepository';
import { ApiVideoRepositoryService } from './infrastructure/repositories/api-video-repository.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: CourseRepository,
      useClass: ApiCourseRepositoryService,
    },
    {
      provide: VideoRepository,
      useClass: ApiVideoRepositoryService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
