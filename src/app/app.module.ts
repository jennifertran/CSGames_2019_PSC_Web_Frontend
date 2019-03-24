import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {routingModule} from "./app.routing";
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobMapComponent } from './job-map/job-map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    JobMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingModule,
    HttpClientModule,
    UiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9FuqZV5aznrocedzGO_b-G65vJJvAVC4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
