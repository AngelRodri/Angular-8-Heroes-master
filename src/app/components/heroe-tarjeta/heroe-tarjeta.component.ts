import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from '../../sevicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router, private heroesService: HeroesService) {
    this.heroeSeleccionado = new EventEmitter();
  }

  verHeroe() {
    // Volvemos a dejar como estaba el método:
    this.router.navigate(['/heroe', this.index]);
  }

  borrarHeroe() {
    const heroes = this.heroesService.getheroes();
    heroes.splice(this.index, 1);
  }
}
