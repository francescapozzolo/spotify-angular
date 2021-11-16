import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _authService: AuthService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    })
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password).subscribe(response => {
      const { tokenSession, data } = response
      this.cookie.set('token', tokenSession, 4, '/') //TODO:📌📌📌📌
      this.router.navigate(['/', 'tracks'])
      console.log('Sesión iniciada correctamente', response)
    }, err => {
      this.errorSession = true;
      console.log('Ocurrió un error con tu email y/o password')
    })
  }
}
