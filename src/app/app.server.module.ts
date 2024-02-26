
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from '../app/app.modules';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    ServerModule,
    
       
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
