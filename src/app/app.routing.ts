import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [{
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
    },
    {
    path:'users',
    component: UsersComponent,
    },
    {
    path:'users/:id/:name/:email',
    component: UserComponent,
    },
    {
    path:'servers',
    component: ServersComponent,
    }, 	
    { 
    path: 'servers/:id/edit',
    component: EditServerComponent,
    },
    {
    path:'**',
    component: NotFoundComponent,
    }];
    
    @NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}