import { Component, OnInit } from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';
import {
    IUsers,
  IPaginator,
  IResponse,
} from '@feature/login/shared/services/login/models/Users.interface';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  paginator: IPaginator;
  users: IUsers[];
  searchTerm = '';

  constructor(public _usersService$: UsersService) {}
  async ngOnInit() {
    await this.getUsers();
  }

 async getUsers(): Promise<void> {
    try {
      const value = await this._usersService$.getUsers(1) as IResponse;
      const {data} = value;
      this.users = data;
    } catch (error) {
    }

  }

   async deteleUser({id,first_name}: IUsers): Promise<void> {
    try {
      await this._usersService$.deleteUserForIndex(id) as any;
      const message = `El usuario ${first_name} ha sido eliminado correctamente`;
      this.users = this.users.filter(users => users.id !== id);
      alert(message)
    } catch (error) {
    } 
  }
}
