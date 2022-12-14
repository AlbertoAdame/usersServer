import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    UsersComponent,
    UserComponent
  ]
})
export class UsersModule { }
