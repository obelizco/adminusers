import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '@feature/login/shared/services/login/login.service';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: LoginService, useValue: mockLoginService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('build the form correctly', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.controls['email']).toBeTruthy();
    expect(component.loginForm.controls['password']).toBeTruthy();
  });

  it('validate email field', () => {
    component.loginForm.controls['email'].setValue('');
    component.validateEmail();
    expect(component.showErrorEmails).toBeTruthy();
    expect(component.errorMessageEmail).toEqual('Email is required');
  });

  it('validate password field', () => {
    component.loginForm.controls['password'].setValue('');
    component.validatePassword();
    expect(component.showErrorPassword).toBeTruthy();
    expect(component.errorMessagePassword).toEqual('Password is required');

    component.loginForm.controls['password'].setValue('1234567');
    component.validatePassword();
    expect(component.showErrorPassword).toBeTruthy();
    expect(component.errorMessagePassword).toEqual('The minimum of characters will be 8');
  });

 

});
