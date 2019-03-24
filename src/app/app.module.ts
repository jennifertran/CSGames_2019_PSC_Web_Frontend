import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {routingModule} from "./app.routing";
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ProfileComponent } from './profile/profile.component';
import { JobMapComponent } from './job-map/job-map.component';

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
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
