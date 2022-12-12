import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/servers.interfaces';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  servers:Server[]=[];

  constructor(private servicioServer:ServersService, private router:Router, private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.servers = this.servicioServer.servers;
  }

  onReload(){
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
