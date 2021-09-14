import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from '../../sevicios/heroes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('nombre', {static: true}) nombre: ElementRef;
  @ViewChild('bio', {static: true}) bio: ElementRef;
  @ViewChild('aparicion', {static: true}) aparicion: ElementRef;
  @ViewChild('casa', {static: true}) casa: ElementRef;

  constructor(private router: Router, private heroesService: HeroesService) {
  }

  crearHeroe() {
    const heroes = this.heroesService.getheroes();
    heroes.push({
      nombre: this.nombre.nativeElement.value,
      bio: this.bio.nativeElement.value,
      aparicion: this.aparicion.nativeElement.value,
      casa: this.casa.nativeElement.value
    });
    this.router.navigate(['/heroes']);
  }

}
