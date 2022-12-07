import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './services/servers.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServersComponent
  ],
  providers: [
    ServersService
  ]
})
export class ServersModule { }
