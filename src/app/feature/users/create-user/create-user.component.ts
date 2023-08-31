import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';
import { INewUser } from '@feature/login/shared/services/login/models/NewUser.interface';
import { AlertService } from '@shared/service/alert.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(
    private readonly _formBuild: FormBuilder,
    private readonly router: Router,
    private readonly _usersService$: UsersService,
    private readonly _alertService$: AlertService
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.newUserForm = this._formBuild.group({
      name: [null, [Validators.required]],
      jop: [null, [Validators.required]],
    });
  }

  get getName() {
    return this.newUserForm.get('name');
  }

  get getJop() {
    return this.newUserForm.get('jop');
  }

  create(): void {
    const payload = this.newUserForm.value as INewUser;
    this._usersService$.createUser(payload).subscribe((res:any)=>{
      const message = `El usuario ${payload.name} ha sido creado exitosamente` 
      this._alertService$.showAlert({message,type:'success',isOpen:true});
      this.redirectToListUsers();
    });
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
