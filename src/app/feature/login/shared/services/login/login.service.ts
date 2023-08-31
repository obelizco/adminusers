import { Injectable } from '@angular/core';
import { ILogin } from './models/Login.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  basePatch = environment.API;
  constructor( private readonly _http:HttpClient,) {}
  /**
   * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
   public login = (payload: ILogin):Promise<any> => this._http.post(`${this.basePatch}/login`, payload).toPromise();

  }
