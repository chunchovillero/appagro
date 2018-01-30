import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServipagService {

apiUrl = environment.apiUrl;
datos:any [] = [];


  constructor(private _http: Http) {
   }

getDatos(id) {

    return this._http.get(this.apiUrl+'paginajson/'+id+'/1')
    .map((res:any) => {
    	this.datos = res.json().configuracion.url;
    	console.log("desde el servicio");
    	console.log(this.datos);
    	return this.datos;
    })
  }




}
