import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesService } from '../app/router/rutas';


const additionalRoutes = new RoutesService();

const routes = [
  ...additionalRoutes.getRoutes(),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



