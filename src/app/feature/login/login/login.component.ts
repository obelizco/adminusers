import { LoginService } from '@feature/login/shared/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../shared/services/login/models/Login.interface';
import { Persistence } from '@shared/service/Persistence.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly _formBuild: FormBuilder,
    private readonly router: Router,
    private readonly _loginService$: LoginService,
    private readonly _persistenceService$: Persistence
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this._formBuild.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  get getEmail() {
    return this.loginForm.get('email');
  }

  get getPassword() {
    return this.loginForm.get('password');
  }

  login(): void {
    const payload = this.loginForm.value as ILogin;
    this._loginService$.login(payload).subscribe((res:any)=>{
      this._persistenceService$.save('token',res.token);
      this.redirectUsers();
    });
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
