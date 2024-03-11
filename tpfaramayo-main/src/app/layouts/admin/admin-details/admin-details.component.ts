// admin-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.css']
})
export class AdminDetailsComponent implements OnInit {
  adminId!: number; 
  adminDetails: any; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.route.params.subscribe(params => {
      this.adminId = +params['id']; 
     
      this.getAdminDetails();
    });
  }

  getAdminDetails() {
    
    this.adminDetails = {
      id: this.adminId,
      name: 'Administrador Ejemplo',
      roles: ['Admin', 'Moderador'],
      createdAt: '01/03/2023'
     
    };
  }
}
