import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";
import { JobMapComponent } from "./job-map/job-map.component"
import { JobDescComponent } from './job-desc/job-desc.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'map', component: JobMapComponent  },
  { path: 'descriptions', component: JobDescComponent  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
