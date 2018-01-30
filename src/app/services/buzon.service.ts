import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Buzon } from '../models/buzon';


@Injectable()
export class BuzonService {

apiUrl = environment.apiUrl;
datos:any [] = [];
private headers = new Headers({'Content-Type':'application/json'});

constructor(private _http: Http) {
   }


enviar(buzon:Buzon){
  console.log("desde el servicio");
  console.log(buzon);

  let body = JSON.stringify(buzon);
  let headers = new Headers({
    'Content-Type':'application/json'
  });

  return this._http.post(this.apiUrl+'buzonjson/1', body, {headers})
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