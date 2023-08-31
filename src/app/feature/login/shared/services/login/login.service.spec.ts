import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ILogin } from './models/Login.interface';
import { environment } from '@environments/environment';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login successfully', () => {
    const mockLoginData: ILogin = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    const mockResponse ={ token: 'QpwL5tke4Pnpja7X4' };

    service.login(mockLoginData).then((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.API}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockLoginData);
    req.flush(mockResponse);
  });

  it('login error', () => {
    const mockLoginData: ILogin = {
      email: 'omar@gmail.com',
      password: 'testpassword',
    };

    service.login(mockLoginData).catch((error) => {
      expect(error).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.API}/login`);
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('error')); 
  });
});
