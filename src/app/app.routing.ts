import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: 'profile', component: ProfileComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
