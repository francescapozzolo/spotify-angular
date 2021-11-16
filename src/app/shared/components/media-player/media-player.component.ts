import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //Programación reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers: Array<Subscription> = [];
  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) { }

  //ngOnInit => Primer paso del ciclo de vida del componente después del contructor
  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => {
      this.state = status

    })
    this.listObservers = [observer1$]
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width
    this.multimediaService.seekAudio(percentageFromX)
  }

  //último momento del ciclo de vida que se ejecuta antes de que el componente sea destruido
  ngOnDestroy(): void {
    this.listObservers.forEach(subs => subs.unsubscribe())
  }

}
