import { Injectable } from '@angular/core';
import { Server } from '../interfaces/servers.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }

  private _servers = [
    {
    id: 1,
    name: 'Productionserver',
    status: 'online'
    },
    {
    id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {
    id: 3,
    name: 'Devserver',
    status: 'offline'
    }
  ]

  get servers():Server[]{
    return [...this._servers];
}

getServer(id: number):any{
  return [...this._servers].at(id);
}

}
