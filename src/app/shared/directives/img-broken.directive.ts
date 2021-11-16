import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;
  //El host o huesped es aquelo a lo que la directiva es capaz de abarcar, de manipular el comportamiento
  //El HostListener escucha al host que en este caso sería el img 
  //El 'error' es un evento nativo de html
  @HostListener('error') handleError(): void {
    const nativeElement = this.host.nativeElement
    if (this.customImg) {
      nativeElement.src = this.customImg;
    } else {
      nativeElement.src = '/assets/spotify.jpg';
    }
  }

  //ElementRef sirve para hacer referencia a un elemento
  constructor(private host: ElementRef) { }

}
