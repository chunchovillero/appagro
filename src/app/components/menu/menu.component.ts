import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  apiUrl = environment.apiUrl;

  constructor( private _menuService:MenuService, private activatedRoute:ActivatedRoute ) { 
  }

  id:any;

  ngOnInit() {

    $(".backstretch").show();

   $.backstretch([
      "assets/img/pot-holder.jpg",
      "assets/img/coffee.jpg",
      "assets/img/dome.jpg"
      ],{
        fade: 750,
        duration: 10000
      });
  	
    this._menuService.getUser()
    .subscribe(data=>{
    	console.log('desde el component');
    	console.log(data);
    });

  }


  }