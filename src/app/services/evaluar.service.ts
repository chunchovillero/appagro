import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Evaluar } from '../models/evaluar';


@Injectable()
export class EvaluarService {

  apiUrl = environment.apiUrl;
  datos:any [] = [];

  constructor(private _http: Http) {
  }

enviar(evaluar:Evaluar){
  console.log("desde el servicio");
  console.log(evaluar);

  let body = JSON.stringify(evaluar);
  let headers = new Headers({
    'Content-Type':'application/json'
  });

  return this._http.post(this.apiUrl+'evaluarjson/1', body, {headers})
    .map(res =>{
      console.log(res.json());
      return res.json();
    })

}

getDatos(id) {

    return this._http.get(this.apiUrl+'paginajson/'+id+'/1')
    .map(res => {
      this.datos = res.json();
      console.log(this.datos);
    })
  }

}

