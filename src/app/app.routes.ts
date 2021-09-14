import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
// Importamos el modulo de buscador:
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form', component: FormComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    // Y añadimos la nueva ruta del buscador que recibirá un parámetro:
    { path: 'buscar/:termino', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const approuting = RouterModule.forRoot(APP_ROUTES);
