import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: number; 
  userDetails: any; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.getUserDetails();
    });
  }

  getUserDetails(): void {
    this.userDetails = {
      id: this.userId,
      name: 'Usuario Ejemplo',
      email: 'usuario@example.com',
      activityHistory: [
        { date: '01/03/2023', action: 'Inicio de sesión' },
        { date: '02/03/2023', action: 'Actualización de perfil' }
      ]
    };
  }
}

