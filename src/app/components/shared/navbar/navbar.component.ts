import { Component } from '@angular/core';
// Importamos el modulo de rutas:
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Creamos el objeto de ruta:
  constructor(private router: Router) { }

  buscarHeroe(termino: string) {
    // Añadimos el término de búsqueda:
    this.router.navigate(['/buscar', termino]);
  }
}
