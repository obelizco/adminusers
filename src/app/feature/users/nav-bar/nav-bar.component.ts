import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlertModel } from '@feature/login/shared/services/login/models/AlertModel.interface';
import { AlertService } from '@shared/service/alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showAlert: IAlertModel = { message: '', type: 'error', isOpen: false };
  constructor(private readonly router: Router, public readonly _alertService$: AlertService) {}

  ngOnInit(): void {
    this.showAlertSubscribe();
  }

  showAlertSubscribe(): void {
    this._alertService$.showAlert$.subscribe((alert: IAlertModel) => {
      this.showAlert = alert;
    });
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(`users${route}`);
  }

  /**
   * Este método no se puede modificar
   * */
  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }
}
