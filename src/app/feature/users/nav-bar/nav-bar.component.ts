import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlertModel } from '@feature/login/shared/services/login/models/AlertModel.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showAlert: IAlertModel = { message: '', type: 'error', isOpen: false };
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
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
