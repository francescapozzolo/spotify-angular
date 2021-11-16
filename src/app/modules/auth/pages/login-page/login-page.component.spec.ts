import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the form should be invalid', () => {
    const mockCredentials = {
      email: '45dsdsdsd455d4s5d4s',
      password: '11111111111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toBeTrue();

  });

  it('the form should be valid', () => {
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toBeFalse();

  });

  it('the button shoul contain the word "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
