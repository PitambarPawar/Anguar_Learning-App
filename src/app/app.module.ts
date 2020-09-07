import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './eventapp.component';
import{EventListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
