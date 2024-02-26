import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { NgModule } from "@angular/core";

const dashboardRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
  