import { Injectable } from '@angular/core';
import { BaseRequestService } from '@shared/service/BaseRequest';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private readonly _baseRequest$: BaseRequestService){

  }
  
  getUsers(page:number) {
    return this._baseRequest$.get(`/users?page=${page}`);
  }

  createUser(payload:any) {
    return this._baseRequest$.post(`/users`,payload);
  }

  deleteUserForIndex(index: number) {
    return this._baseRequest$.delete(`/users/${index}`);
  }
}
