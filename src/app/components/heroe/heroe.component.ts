import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importamos el servicio:
import { HeroesService } from '../../sevicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  @ViewChild('nombre', {static: false}) nombre: ElementRef;
  @ViewChild('bio', {static: false}) bio: ElementRef;
  @ViewChild('aparicion', {static: false}) aparicion: ElementRef;
  @ViewChild('casa', {static: false}) casa: ElementRef;

  editMode = false;
  // Creamos un atributo que inicializaremos con un objeto:
  heroe: any = {};
  // Creamos el objeto del servicio:
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      // Recuperamos el héroe que queremos mostrar en el objeto:
      this.heroe = this.heroesService.getHeroe(params.id); // le pasamos al método el id que capturamos por parámetros.
    });
  }

  editarHeroe() {
    this.editMode = true;
  }

  actualizarHeroe() {
    const heroes = this.heroesService.getheroes();
    const objIndex = heroes.map(heroe => heroe.nombre).indexOf(this.heroe.nombre);
    heroes[objIndex].nombre = this.nombre.nativeElement.value;
    heroes[objIndex].bio = this.bio.nativeElement.value;
    heroes[objIndex].aparicion = this.aparicion.nativeElement.value;
    heroes[objIndex].casa = this.casa.nativeElement.value;
    this.editMode = false;
  }
}
