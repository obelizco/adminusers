import { Injectable } from '@angular/core';
import { BaseRequestService } from '@shared/service/BaseRequest';
import { ILogin } from './models/Login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly _baseRequest$: BaseRequestService) {}
  /**
   * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(payload: ILogin) {
    return this._baseRequest$.post('/login', payload);
  }
}
