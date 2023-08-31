import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';

@NgModule({
  declarations: [NavBarComponent, HomeUserComponent, ListUsersComponent, CreateUserComponent,FilterUserByNamePipe],
  imports: [CommonModule, UsersRoutingModule,FormsModule,ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
