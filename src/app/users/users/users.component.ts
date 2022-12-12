import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users.interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  usuarios!: User[];
  constructor(private servicioUsuario:UsersService) { }

  ngOnInit(): void {
    this.servicioUsuario.obtenerUsuarios()
    .subscribe({
      next: (res) => this.usuarios = res,
      error: (error) => console.log(error)
    })
  }

}
