import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IUuidGenerator } from './domain/shared/interfaces/UUIDGenerator.interface';
import { CourseRepository } from './domain/Course/interfaces/CourseRepository';
import { ApiCourseRepositoryService } from './infrastructure/repositories/api-course-repository.service';
import { VideoRepository } from './domain/Video/interfaces/VideoRepository';
import { ApiVideoRepositoryService } from './infrastructure/repositories/api-video-repository.service';
import { AuthRepository } from './domain/shared/interfaces/userRepository.interface';
import { ApiAuthRepositoryService } from './infrastructure/repositories/api-auth-repository.service';
import { UUIDGenerator } from './infrastructure/uuidGenerator';

const providers = [
  {
    provide: CourseRepository,
    useClass: ApiCourseRepositoryService,
  },
  {
    provide: VideoRepository,
    useClass: ApiVideoRepositoryService,
  },
  {
    provide: AuthRepository,
    useClass: ApiAuthRepositoryService,
  },
  {
    provide: IUuidGenerator,
    useClass: UUIDGenerator,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
