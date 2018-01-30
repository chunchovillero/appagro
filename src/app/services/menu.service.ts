import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MenuService {

apiUrl = environment.apiUrl;
paginas:any [] = [];
ancho:number;
lg:any;
sm:any;


  constructor(private _http: Http) {
   }


getUser() {

    return this._http.get(this.apiUrl+'paginasjson')
    .map(res => {
    	console.log(res.json());
    	this.paginas = res.json().pagina.data;
    	this.ancho = res.json().ancho;
    	this.lg = res.json().lg;
    	this.sm = res.json().sm;
    })
  }




}
