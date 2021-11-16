import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

@Component({
  template: '<img appImgBroken class="testing-directive" [src]="srcMock">'
})

class TestComponent {
  public srcMock: any = null;
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ImgBrokenDirective]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  // it('La directiva debería cambiar la imagen por una img por defecto', (done: DoneFn) => {
  //   const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
  //   const beforeImgSrc = beforeImgElement.src;

  //   component.srcMock = undefined;

  //   setTimeout(() => {
  //     const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
  //     const afterImgSrc = afterImgElement.src;

  //     expect(afterImgSrc).toEqual('/assets/spotify.jpg');
  //     done();
  //   }, 3000);

  // });
});
