import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServipagService } from '../../services/servipag.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

declare var jQuery:any;
declare var $:any;
declare var swal:any;




@Component({
    selector: 'app-servipag',
    templateUrl: './servipag.component.html',
    styleUrls: ['./servipag.component.css']
})
export class ServipagComponent implements OnInit {
    id:any;
    timer:number;
    tiempo:any;
    minutes:any;
    seconds:any;
    addtoTiempo:any;
    idset:any;
    url:any;


    constructor(private _servipagService:ServipagService, private _activatedRoute:ActivatedRoute, public sanitizer: DomSanitizer ) { 
        this.id = _activatedRoute.snapshot.params['id'];
    }

    ngOnInit() { 

        this.tiempo = 300;

        this.idset=setInterval(()=> {

            this.timer = this.tiempo, this.minutes, this.seconds;
            this.minutes = this.timer / 60;
            this.seconds = this.timer % 60;

            this.minutes = Math.floor(this.minutes);
            this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
            this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

            $("#time").text(this.minutes + ":" + this.seconds );

            this.tiempo = this.tiempo - 1;

            if(this.timer < 55) {
                $("#addtime").show();
            } else {
                $("#addtime").hide();
            }




            if (--this.timer == 1) {
                console.log("se acabo el tiempo");
                //alert("Lo sentimos, esta sesión ha expirado. Serás redirigido al inicio.");

                swal({
                    title: 'Tiempo agotado',
                    text: "Lo sentimos, esta sesión ha expirado.",
                    type: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'No, volver al menu.',
                    confirmButtonClass: 'btn btn-success',
                    allowOutsideClick: false,
                    buttonsStyling: false,
                    timer: 5000
                }).then(function () {
                    window.location.href = 'index.html';

                } ,function (dismiss) {
                    if (dismiss === 'timer') {
                        window.location.href = 'index.html';
                    }
                })

            }
        },1000);





        $(".backstretch").hide();

        $("#MyIframe").load(function() {
            $(".loading").hide();
        });

        
        $('#MyIframe').load( () =>{

            $('#MyIframe').contents().find('input').keyboard({
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
            })
            console.log('keyboard loaded');
        });



        this._servipagService.getDatos(this.id)
        .subscribe(data=>{
            console.log("desde el componente");
            console.log(data);
            this.url=data;

        });

    }

    ngOnDestroy() {
        if (this.idset) {
            clearInterval(this.idset);
        }

        this.url;
    }

    agregarTiempo(){
        this.tiempo = this.tiempo + 180;
    }

    Imprimir(){
        window.print();
    }

}