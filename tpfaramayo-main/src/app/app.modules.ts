import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { MessagesComponent } from '../app/massages/massages.component';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail/alumnos-detail.component';
import { AlumnosSearchComponent } from './alumnos-search/alumnos-search.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
   imports: [
  BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, { dataEncapsulation: false }
     )
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    AlumnosComponent,
    AlumnosDetailComponent,
    AlumnosSearchComponent,
    MessagesComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
