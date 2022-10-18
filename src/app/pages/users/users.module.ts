import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersRoutingModule } from './users-routing.module'


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent,
    UsersListComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
