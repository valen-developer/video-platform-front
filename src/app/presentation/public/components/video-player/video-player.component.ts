import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  @Input()
  public videoUrl: SafeUrl | string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.videoUrl);
  }

  ngOnInit(): void {
    console.log(this.videoUrl);
  }
}
