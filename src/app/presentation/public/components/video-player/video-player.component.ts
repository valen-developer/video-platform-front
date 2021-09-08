import {
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

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('player') private player: Player;

  @Input()
  public videoUrl: SafeUrl | string;

  @Input()
  public currentTime = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public onReady() {
    setTimeout(() => {
      this.player.play();
    }, 0);
  }
}
