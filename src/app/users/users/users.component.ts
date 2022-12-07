import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private servicioUsuario:UsersService) { }

  ngOnInit(): void {
  }

  get usuarios() {
    return this.servicioUsuario.obtenerUsuarios;
  }
}
