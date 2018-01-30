import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { HomeService } from './services/home.service';
import { PaginasService } from './services/paginas.service';
import { ServipagService } from './services/servipag.service';
import { VideosService } from './services/videos.service';
import { MenuService } from './services/menu.service';
import { BuzonService } from './services/buzon.service';
import { EvaluarService } from './services/evaluar.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EvaluarComponent } from './components/evaluar/evaluar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SapComponent } from './components/sap/sap.component';
import { ServipagComponent } from './components/servipag/servipag.component';
import { VideosComponent } from './components/videos/videos.component';
import { PaginasComponent } from './components/paginas/paginas.component';
import { GraciasComponent } from './components/gracias/gracias.component';
import { BuzonComponent } from './components/buzon/buzon.component';
import { Gracias2Component } from './components/gracias2/gracias2.component';

import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EvaluarComponent,
    MenuComponent,
    SapComponent,
    ServipagComponent,
    VideosComponent,
    PaginasComponent,
    SafePipe,
    GraciasComponent,
    BuzonComponent,
    Gracias2Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    HttpModule,
    MatKeyboardModule,
    BrowserAnimationsModule
  ],
  providers: [
  HomeService,
  PaginasService,
  ServipagService,
  VideosService,
  MenuService,
  EvaluarService,
  BuzonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
