import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  basePatch = environment.API;
  headers = this.httpOptions();
  constructor(private readonly _http:HttpClient){

  }
  
  getUsers = (page:number):Promise<any> => this._http.get(`${this.basePatch}/users?page=${page}`,this.headers).toPromise();
  
  createUser = (payload:any):Promise<any> => this._http.post(`${this.basePatch}/users`,payload,this.headers).toPromise();

  deleteUserForIndex=(index: number):Promise<any> => this._http.delete(`${this.basePatch}/users/${index}`,this.headers).toPromise();
   

  private httpOptions(): any {
    const headers = !!localStorage.getItem("token")
      ? new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', localStorage.getItem("token"))
      : new HttpHeaders().set('Content-Type', 'application/json');

    return { headers };
  }
}
