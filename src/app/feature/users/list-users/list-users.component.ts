import { Component, OnInit } from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';
import {
    IUsers,
  IPaginator,
} from '@feature/login/shared/services/login/models/Users.interface';
import { map } from 'rxjs/operators';
import { AlertService } from '@shared/service/alert.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  paginator: IPaginator;
  users: IUsers[];
  searchTerm = '';

  constructor(private readonly _usersService$: UsersService,
              private readonly _alertService$: AlertService) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this._usersService$
      .getUsers(1)
      .pipe(
        map((value) => {
          this.paginator = {
            page: value.page,
            per_page: value.per_page,
            total: value.total,
            total_pages: value.total_pages,
          };
          return value.data;
        }),
      )
      .subscribe((res) => (this.users = res));
  }

  deteleUser({id,first_name}: IUsers): void {
    this._usersService$.deleteUserForIndex(id).subscribe(() =>{
      const message = `El usuario ${first_name} ha sido eliminado correctamente`;
      this._alertService$.showAlert({message,type:'success',isOpen:true});
      this.users = this.users.filter(users => users.id !== id);
      // this.getUsers(); Recupera información nuevamente de la api para actualizar la lista de usuarios
    })
  }
}
