import { Routes } from "@angular/router";
import { AlquilerComponent } from "../component/alquiler/alquiler.component";
import { AltaComponent } from "../component/alta/alta.component";
import { CarritoComponent } from "../component/carrito/carrito.component";
import { ErrorComponent } from "../component/error/error.component";
import { InfoComponent } from "../component/info/info.component";
import { ListadoComponent } from "../component/listado/listado.component";
import { LoginComponent } from "../component/login/login.component";
import { RegisterComponent } from "../component/register/register.component";
import { WarningComponent } from "../component/warning/warning.component";
import { Injectable } from "@angular/core";
import { DashboardComponent } from "../layouts/dashboard/dashboard/dashboard.component";
import { HomeComponent } from "../layouts/dashboard/pages/home/home.component";

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  private routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'alta', component: AltaComponent },
    { path: 'alquiler', component: AlquilerComponent },
    { path: 'listado', component: ListadoComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'info/:descripcion', component: InfoComponent },
    { path: 'warning/:descripcion', component: WarningComponent },
    { path: 'error/:descripcion', component: ErrorComponent },
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'home', component: HomeComponent },
       
      ],
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
  ];

  getRoutes() {
    return this.routes;
  }
}



