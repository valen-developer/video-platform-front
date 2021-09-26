import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Player } from '@vime/angular';

import { SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { CinemaModeService } from 'src/app/application/shared/cinema-mode.service';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  private apiUrl = environment.apiUrl + '/course/poster';

  @ViewChild('player') private player: Player;

  @Input()
  public videoUrl: SafeUrl | string;

  @Input()
  public currentTime = 0;

  @Input() public imagePath: string;
  @Output() public nextVideoEmitter = new EventEmitter<void>();

  public poster: string | SafeUrl;
  private cinemaModeSubscription: Subscription;

  constructor(
    private cinemaModeService: CinemaModeService,
    private courseGetter: CoursesGetterService
  ) {}

  ngOnInit(): void {
    this.getCourseImage();
  }
  ngOnDestroy(): void {
    this.cinemaModeSubscription.unsubscribe();
  }

  public onReady() {
    this.cinemaModeSubscribe();
  }

  public next() {
    this.nextVideoEmitter.emit();
  }

  public toggleCinemaMode() {
    this.cinemaModeService.toggleCinemaMode();
  }

  private getCourseImage(): void {
    if (!this.imagePath) return;

    this.courseGetter.getCourseImageAsDataUrl(this.imagePath).then((img) => {
      this.poster = img;
    });
  }

  private cinemaModeSubscribe(): void {
    this.cinemaModeSubscription =
      this.cinemaModeService.isCinemaMode$.subscribe((isCinemaMode) => {
        if (isCinemaMode) {
          this.player.aspectRatio = '2:1';
        }

        if (!isCinemaMode) this.player.aspectRatio = '16:9';
      });
  }
}
