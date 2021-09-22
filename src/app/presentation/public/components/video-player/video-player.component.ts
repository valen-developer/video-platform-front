import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Player } from '@vime/angular';

import { SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { CinemaModeService } from 'src/app/application/shared/cinema-mode.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit
{
  private apiUrl = environment.apiUrl + '/course/poster';

  @ViewChild('player') private player: Player;

  @Input()
  public videoUrl: SafeUrl | string;

  @Input()
  public currentTime = 0;

  @Input() public imagePath: string;

  @Output() public nextVideoEmitter = new EventEmitter<void>();

  public poster: string | undefined = undefined;

  constructor(private cinemaModeService: CinemaModeService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.poster = this.imagePath
      ? `${this.apiUrl}?image=${this.imagePath}`
      : undefined;
  }

  ngAfterViewInit(): void {}
  ngAfterContentInit(): void {}

  public onReady() {
    // setTimeout(() => {
    //   this.player.play();
    // }, 0);
  }

  public next() {
    console.log('End');

    this.nextVideoEmitter.emit();
  }

  toggleCinemaMode() {
    this.cinemaModeService.isCinemaMode$.subscribe((isCinemamode) => {
      if (isCinemamode) {
        this.player.aspectRatio = '2:1';
      }

      if (!isCinemamode) this.player.aspectRatio = '16:9';
    });

    this.cinemaModeService.toggleCinemaMode();
  }
}
