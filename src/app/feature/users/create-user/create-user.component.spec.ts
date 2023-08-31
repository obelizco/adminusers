import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { UsersService } from './shared/services/users/users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let mockUsersService: jasmine.SpyObj<UsersService>;
  beforeEach(async () => {
    mockUsersService = jasmine.createSpyObj('UsersService', ['createUser']);
    await TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('build the form correctly', () => {
    expect(component.newUserForm).toBeTruthy();
    expect(component.newUserForm.controls['name']).toBeTruthy();
    expect(component.newUserForm.controls['jop']).toBeTruthy();
  });

  it('validate name field', () => {
    component.newUserForm.controls['name'].setValue('');
    component.create();
    expect(component.getName.hasError('required')).toBeTruthy();
  });

  it('validate job field', () => {
    component.newUserForm.controls['jop'].setValue('');
    component.create();
    expect(component.getJop.hasError('required')).toBeTruthy();
  });



});
