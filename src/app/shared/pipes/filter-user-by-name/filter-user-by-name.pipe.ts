import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '@feature/login/shared/services/login/models/Users.interface';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users:IUsers[],searchTerm:string):IUsers[]{
    if (searchTerm.length==0) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();

    return users.filter(({first_name,last_name}: IUsers) => {
      const userName = `${first_name} ${last_name}`;
      return userName.toLowerCase().includes(searchTerm);
    });
  }

}
