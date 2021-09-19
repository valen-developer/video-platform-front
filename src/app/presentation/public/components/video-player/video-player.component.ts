import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Player } from '@vime/angular';

import { SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

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

  public poster: string | undefined = undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.poster = this.imagePath
      ? `${this.apiUrl}?image=${this.imagePath}`
      : undefined;
  }

  ngAfterViewInit(): void {}
  ngAfterContentInit(): void {}

  public onReady() {
    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  public next(data: any) {
    console.log(data);
    console.log('cambio');
  }

  toggleCinemaMode() {
    console.log('cinema mode');
  }
}
