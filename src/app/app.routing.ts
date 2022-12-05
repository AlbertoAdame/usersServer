import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from './users/users/users.component';

const appRoutes = [{
    path:'/',
    component: UsersComponent,
    pathMatch: 'full'
}]