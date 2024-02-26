import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { DashboardComponent } from '../app/layouts/dashboard/dashboard/dashboard.component';
import { HomeComponent } from '../app/layouts/dashboard/pages/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Corregido: Quitada la barra al inicio
  
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('../app/layouts/dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'dashboard/home', component: HomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


