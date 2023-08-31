import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '@feature/login/shared/services/login/models/Users.interface';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users:IUsers[],searchTerm:string):IUsers[]{
    if (searchTerm.length<3) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();

    const filterUser = users.filter(({first_name}: IUsers) => {
      return first_name.toLowerCase().includes(searchTerm);
    });
    return filterUser;
  }

}
