import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Home } from '../models/home';


@Injectable()
export class HomeService {

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


iniciarSesion(home:Home){
  console.log("desde el servicio");
  console.log(home);

  let body = JSON.stringify(home);
  let headers = new Headers({
    'Content-Type':'application/json'
  });

  return this._http.post(this.apiUrl+'iniciarsesionjson', body, {headers})
    .map(res =>{
      console.log(res.json());
      return res.json();
    })

}



}
