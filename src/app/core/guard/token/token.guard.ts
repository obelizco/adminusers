import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor( private readonly _router: Router){

  }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!!localStorage.getItem('token')){
      return true;
    }else{
      this._router.navigateByUrl('/login');
      return false;
    }
  }
  
  
}
