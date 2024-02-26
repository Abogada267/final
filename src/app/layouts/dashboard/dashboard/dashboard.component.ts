import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showFiller = false;
  usersLink = {
    isActive: false,
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  logout(): void {
    localStorage.removeItem('access-token');
    this.router.navigate(['auth', 'login'], {
      queryParams: {
        hola: 'mundo',
      },
    });
  }
}
export { DashboardModule };