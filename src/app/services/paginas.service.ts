import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";


@Injectable()
export class PaginasService {

apiUrl = environment.apiUrl;
datos:string;


  constructor(private _http: Http, private router: Router) {
   }




getDatos(id) {

    return this._http.get(this.apiUrl+'paginajson/'+id+'/1')
    .map(res => {
    	this.datos = res.json().pagina.tipo.nombre;
    	if(this.datos=='Iframe'){
		    this.router.navigate(['/servipag',id]);
		  };

      if(this.datos=='Videos'){
        this.router.navigate(['/videos',id]);
      };

      if(this.datos=='Encuesta'){
        this.router.navigate(['/evaluar',id]);
      };

      if(this.datos=='Buzon'){
        this.router.navigate(['/buzon']);
      };
    })
  }




}
