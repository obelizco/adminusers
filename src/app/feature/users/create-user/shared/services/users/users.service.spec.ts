import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieve users', () => {
    const mockUsers = {
      'page': 1,
      'per_page': 6,
      'total': 12,
      'total_pages': 2,
      'data': [
        {
          'id': 1,
          'email': 'george.bluth@reqres.in',
          'first_name': 'George',
          'last_name': 'Bluth',
          'avatar': 'https://reqres.in/img/faces/1-image.jpg',
        },
        {
          'id': 2,
          'email': 'janet.weaver@reqres.in',
          'first_name': 'Janet',
          'last_name': 'Weaver',
          'avatar': 'https://reqres.in/img/faces/2-image.jpg',
        },
        {
          'id': 3,
          'email': 'emma.wong@reqres.in',
          'first_name': 'Emma',
          'last_name': 'Wong',
          'avatar': 'https://reqres.in/img/faces/3-image.jpg',
        },
        {
          'id': 4,
          'email': 'eve.holt@reqres.in',
          'first_name': 'Eve',
          'last_name': 'Holt',
          'avatar': 'https://reqres.in/img/faces/4-image.jpg',
        },
        {
          'id': 5,
          'email': 'charles.morris@reqres.in',
          'first_name': 'Charles',
          'last_name': 'Morris',
          'avatar': 'https://reqres.in/img/faces/5-image.jpg',
        },
        {
          'id': 6,
          'email': 'tracey.ramos@reqres.in',
          'first_name': 'Tracey',
          'last_name': 'Ramos',
          'avatar': 'https://reqres.in/img/faces/6-image.jpg',
        },
      ],
      'support': {
        'url': 'https://reqres.in/#support-heading',
        'text': 'To keep ReqRes free, contributions towards server costs are appreciated!',
      },
    };

    service.getUsers(1).then((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne(`${environment.API}/users?page=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('create a user', () => {
    const mockUser = { name: 'omar', jop: 'develop' };

    service.createUser(mockUser).then((createdUser) => {
      expect(createdUser).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${environment.API}/users`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);
    req.flush(mockUser);
  });

  it('delete a user by index', () => {
    const mockIndex = 1;

    service.deleteUserForIndex(mockIndex).then(() => {
    });

    const req = httpTestingController.expectOne(`${environment.API}/users/${mockIndex}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
