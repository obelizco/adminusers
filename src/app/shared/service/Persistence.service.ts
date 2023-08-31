import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Persistence {
  constructor() {}

  save(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  
  get(key:string){
    return localStorage.getItem(key);
  }
}
