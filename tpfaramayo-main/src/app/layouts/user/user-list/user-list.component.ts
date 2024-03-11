
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[]; // Aquí puedes definir la estructura de tu lista de usuarios

  // Puedes inicializar la lista de usuarios en el constructor o mediante un servicio
  constructor() {
    this.users = [
      { id: 1, name: 'Usuario 1' },
      { id: 2, name: 'Usuario 2' },

    ];
  }

}

