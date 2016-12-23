import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';

import { HttpService } from '../service/http/http.service';
import { InMemoryPeopleService } from '../service/http/webapi';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryPeopleService,{ delay:1000 })
  ],
  providers: [
    HttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
