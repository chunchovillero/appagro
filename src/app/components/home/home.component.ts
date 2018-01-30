import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

import { Home } from '../../models/home';
import { HomeService } from  '../../services/home.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public home:Home;
  apiUrl = environment.apiUrl;

  constructor( private _homeService:HomeService, private activatedRoute:ActivatedRoute ) {
    this.home = new Home('1');
  }

  id:any;

  ngOnInit() {

    $.backstretch([
      "assets/img/pot-holder.jpg",
      "assets/img/coffee.jpg",
      "assets/img/dome.jpg"
      ],{
        fade: 750,
        duration: 10000
      });



    this._homeService.getUser()
    .subscribe(data=>{
      console.log('desde el component');
      console.log(data);
    });

  }

  iniciarSesion(){
    $('#screensaver').fadeOut();

     this._homeService.iniciarSesion(this.home)
    .subscribe(
      response =>{
      },
      error => {
        console.log(<any>error)
      }
      )

  }




}