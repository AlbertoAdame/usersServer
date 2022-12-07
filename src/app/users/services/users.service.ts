import { Injectable } from '@angular/core';
import { User } from '../interfaces/users.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string="http://localhost:3000/users"
  results:User[]=[]

  constructor(private http : HttpClient) { }

  obtenerUsuarios():Observable<User[]>{

    return this.http.get<User[]>(`${this.url}`)    
  } 
}
