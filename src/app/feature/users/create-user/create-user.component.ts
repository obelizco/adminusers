import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';
import { INewUser } from '@feature/login/shared/services/login/models/NewUser.interface';
import { IAlertModel } from '@feature/login/shared/services/login/models/AlertModel.interface';


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
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.newUserForm = this._formBuild.group({
      name: ['', [Validators.required]],
      jop: ['', [Validators.required]],
    });
  }

  get getName() {
    return this.newUserForm.get('name');
  }

  get getJop() {
    return this.newUserForm.get('jop');
  }

  async create(): Promise<void> {
    const payload = this.newUserForm.value as INewUser;
    if(this.newUserForm.valid){
      try {
        await this._usersService$.createUser(payload);
        const message = `El usuario ${payload.name} ha sido creado exitosamente` 
        alert(message);
        this.redirectToListUsers();
      } catch (error) {
      }
    }
  }

 


  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
