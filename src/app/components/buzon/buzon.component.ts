import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { Buzon } from '../../models/buzon';
import { BuzonService } from  '../../services/buzon.service';





// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.css']
})
export class BuzonComponent implements OnInit {

  public buzon:Buzon;
  private jsonString: string;
  private parseError: boolean;
  private data: any;
  id:any;



  constructor( private _activatedRoute:ActivatedRoute,  private router: Router, private _buzonService:BuzonService) {
    this.id = _activatedRoute.snapshot.params['id'];
    this.buzon = new Buzon('','','','');

  }

  ngOnInit() {


    $(".backstretch").hide();


    $('input[type="text"]').keyboard({
      usePreview: false, // disabled for contenteditable
      useCombos: false,
      autoAccept: true,
      layout: 'custom',
      customLayout: {
        'normal': [
        '` 1 2 3 4 5 6 7 8 9 0 - = {del} {b}',
        '{tab} q w e r t y u i o p [ ] \\',
        'a s d f g h j k l ñ ; \' {enter}',
        '{shift} z x c v b n m , . / {shift}',
        '.cl .com {space} @ {left} {right}'
        ],
        'shift': [
        '~ ! @ # $ % ^ & * ( ) _ + {del} {b}',
        '{tab} Q W E R T Y U I O P { } |',
        'A S D F G H J K L Ñ : " {enter}',
        '{shift} Z X C V B N M < > ? {shift}',
        '.cl .com {space} {combo} {left} {right}'
        ]
      },
      position: {
        of: $(window), // null = attach to input/textarea; use $(sel) to attach elsewhere
        my : 'center top',
        at : 'center top',
        at2: 'center bottom' // used when "usePreview" is false
      }
    });

    $('textarea').keyboard({
      usePreview: false, // disabled for contenteditable
      useCombos: false,
      autoAccept: true,
      layout: 'custom',
      customLayout: {
        'normal': [
        '` 1 2 3 4 5 6 7 8 9 0 - = {del} {b}',
        '{tab} q w e r t y u i o p [ ] \\',
        'a s d f g h j k l ñ ; \' {enter}',
        '{shift} z x c v b n m , . / {shift}',
        '.cl .com {space} @ {left} {right}'
        ],
        'shift': [
        '~ ! @ # $ % ^ & * ( ) _ + {del} {b}',
        '{tab} Q W E R T Y U I O P { } |',
        'A S D F G H J K L Ñ : " {enter}',
        '{shift} Z X C V B N M < > ? {shift}',
        '.cl .com {space} {combo} {left} {right}'
        ]
      },
      position: {
        of: $(window), // null = attach to input/textarea; use $(sel) to attach elsewhere
        my : 'center top',
        at : 'center top',
        at2: 'center bottom' // used when "usePreview" is false
      }
    });

    this._buzonService.getDatos(this.id)
        .subscribe(data=>{
            
        });

  }
  onSubmit(nombre, cargo, telefono, respuesta1){


    this.buzon.nombre=nombre;
    this.buzon.cargo=cargo;
    this.buzon.telefono=telefono;
    this.buzon.respuesta1=respuesta1;
    console.log(this.buzon);

    this._buzonService.enviar(this.buzon)
    .subscribe(
      response =>{
        this.router.navigate(['/gracias2']);          
      },
      error => {
        console.log(<any>error)
      }
      )
  }

}