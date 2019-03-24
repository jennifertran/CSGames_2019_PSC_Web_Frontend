import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";
import { JobMapComponent } from "./job-map/job-map.component"

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'map', component: JobMapComponent  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
