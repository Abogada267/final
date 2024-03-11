import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';


@NgModule({
  declarations: [AdminListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminListComponent }
      
    ])
  ]
})
export class AdminModule { }
