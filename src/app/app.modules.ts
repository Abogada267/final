import { NgModule, LOCALE_ID, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

// Angular Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// NgRx imports
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Local module and component imports
import { AppRoutingModule } from './app.Routing.module';
import { appStoreProviders } from './state/videoclub.store';
import { AppComponent } from './app.component';
import { AltaComponent } from './component/alta/alta.component';
import { ListadoComponent } from './component/listado/listado.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { NavbarComponent } from './component/navbar/app-navbar.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { RegisterComponent } from './component/register/register.component';
import { InfoComponent } from './component/info/info.component';
import { WarningComponent } from './component/warning/warning.component';
import { AlquilerComponent } from './component/alquiler/alquiler.component';
import { AppNavbarModule } from './component/navbar/app-navbar.module';

// Locale data imports
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';

import { appReducers } from './core/store';
import { routes } from '../app/router/rutas';

registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    ListadoComponent,
    CarritoComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    InfoComponent,
    WarningComponent,
    AlquilerComponent,
  ],
  imports: [
    NgModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
   MatButtonModule,
   MatCardModule,
   MatNativeDateModule, 
    MatDatepickerModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
   EffectsModule,
  StoreModule,
  StoreDevtoolsModule, 
 AppRoutingModule,
appStoreProviders, 
AppComponent, 
AltaComponent, 
ListadoComponent, 
CarritoComponent, 
 NavbarComponent, 
 LoginComponent, 
 ErrorComponent 
RegisterComponent, 
InfoComponent, 
 WarningComponent, 
 AlquilerComponent, 
 AppNavbarModule, 
FormsModule,
RouterOutlet,

   RouterModule, 
  RouterModule.forRoot(routes.getRoutes()),
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot(appReducers, {}),
    AppNavbarModule,
],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost:5000/',
    },
    appStoreProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

