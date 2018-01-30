import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PaginasComponent} from './components/paginas/paginas.component';
import {ServipagComponent} from './components/servipag/servipag.component';
import {VideosComponent} from './components/videos/videos.component';
import {EvaluarComponent} from './components/evaluar/evaluar.component';
import {SapComponent} from './components/sap/sap.component';
import {MenuComponent} from './components/menu/menu.component';
import {GraciasComponent} from './components/gracias/gracias.component';
import {Gracias2Component} from './components/gracias2/gracias2.component';
import {BuzonComponent} from './components/buzon/buzon.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'paginas/:id', component: PaginasComponent },
  { path: 'servipag/:id', component: ServipagComponent },
  { path: 'videos/:id', component: VideosComponent },
  { path: 'evaluar/:id', component: EvaluarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sap', component: SapComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: 'gracias2', component: Gracias2Component },
  { path: 'buzon/:id', component: BuzonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
