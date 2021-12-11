import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mediaSub: Subscription | undefined;

  title = 'angular12';

  constructor(
    public mediaObserver: MediaObserver
  ) {
    this.mediaSub = this.mediaObserver.media$.subscribe((r: MediaChange) => {
      console.log(r.mqAlias);
    })
  }
}
