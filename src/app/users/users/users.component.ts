import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users.interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users!: User[];
  constructor(private servicioUsuario:UsersService) { }

  


  ngOnInit(): void {
    this.servicioUsuario.obtenerUsuarios()
    .subscribe({
      next: (res) => this.users = res,
      error: (error) => console.log(error)
    })
  }

}
