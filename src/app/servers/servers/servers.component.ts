import { Component, OnInit } from '@angular/core';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private servicioServer:ServersService) { 
    
  }

  get servidores() {
    return this.servicioServer.servers;
  }

  ngOnInit(): void {
  }

}
