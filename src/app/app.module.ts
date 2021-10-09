import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TokenInterceptor } from './application/interceptors/token.interceptor';

// Modules
import { SharedModule } from './presentation/shared/shared.module';
import { UserRepository } from './domain/User/interfaces/UserRepository.interface';
import { ApiUserRepositoryService } from './infrastructure/repositories/api-user-repository.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const providers: Provider[] = [
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
  {
    provide: UserRepository,
    useClass: ApiUserRepositoryService,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
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
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  exports: [],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
