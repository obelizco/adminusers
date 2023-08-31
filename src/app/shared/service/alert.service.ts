import { Injectable } from '@angular/core';
import { IAlertModel } from '@feature/login/shared/services/login/models/AlertModel.interface';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private showAlertSubject$ =  new BehaviorSubject<IAlertModel>({message:'',type:'error',isOpen: false});
  showAlert$: Observable<IAlertModel> = this.showAlertSubject$.asObservable();
  constructor() {
   
   }

  showAlert(alert : IAlertModel){
    this.dispatchshowAlert(alert);
    timer(4000)
    .pipe(take(1))
    .subscribe(() => {
      this.dispatchshowAlert({message:alert.message , type:alert.type ,isOpen: false});
    });
  }

  private dispatchshowAlert(status:IAlertModel): void {
    this.showAlertSubject$.next(status);
  }

}