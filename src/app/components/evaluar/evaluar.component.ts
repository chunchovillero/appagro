import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EvaluarService } from '../../services/evaluar.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { Evaluar } from '../../models/evaluar';



// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.component.html',
  styleUrls: ['./evaluar.component.css']
})
export class EvaluarComponent implements OnInit {

  id:any;
public evaluar:Evaluar;
 

  constructor(private _evaluarService:EvaluarService, private _activatedRoute:ActivatedRoute,  private router: Router) {
    this.id = _activatedRoute.snapshot.params['id'];
    this.evaluar = new Evaluar('','','','','','','');
  }

 ngOnInit() {

    this._evaluarService.getDatos(this.id)
        .subscribe(data=>{
            
        });
   
   $(".backstretch").hide();

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


      //Wizard
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

            var $target = $(e.target);

            if ($target.parent().hasClass('disabled')) {
                return false;
            }
        });

        $(".next-step").click( (e) => {
            console.log("llamada 1");
           
            var $active = $('.wizard .nav-tabs li.active');
            $active.next().removeClass('disabled');
            this.nextTab($active);

        });
        $(".prev-step").click( (e) => {

            var $active = $('.wizard .nav-tabs li.active');
            this.prevTab($active);

        });

  }





       nextTab(elem) {
        console.log(elem);
        $(elem).next().find('a[data-toggle="tab"]').click();
        }
      
       prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
        }


  public mostrarTitulo(){
    console.log("click");

   // Usamos jQuery con normalidad
    $(".title").slideToggle();
  }

  guardar(){
      console.log(this.evaluar);
      //this.router.navigate(['/gracias']);
  }

    onSubmit(respuesta2, respuesta7){
      this.evaluar.respuesta2=respuesta2;
      this.evaluar.respuesta7=respuesta7;

    console.log(this.evaluar);
    this._evaluarService.enviar(this.evaluar)
    .subscribe(
      response =>{
        this.router.navigate(['/gracias']);          
      },
      error => {
        console.log(<any>error)
      }
      )
  }


}