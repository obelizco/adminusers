import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Persistence } from '@shared/service/Persistence.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private readonly _persistence$: Persistence,
              private readonly _router: Router){

  }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this._persistence$.get('token'))
    if(!!this._persistence$.get('token')){
      return true;
    }else{
      this._router.navigateByUrl('/login');
      return false;
    }
  }
  
  
}
