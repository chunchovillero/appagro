import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PaginasService } from '../../services/paginas.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginasComponent implements OnInit {
id:any;

	constructor(private _paginasService:PaginasService, private _activatedRoute:ActivatedRoute, public sanitizer: DomSanitizer ) { 
		this.id = _activatedRoute.snapshot.params['id'];
	}
	

	ngOnInit() {

	   this._paginasService.getDatos(this.id)
	    .subscribe(data=>{
	    	console.log('desde el component');
	    	console.log(data);
	    });


		$(document).ready(function(){
    $(".video").click(function(){

        //alert($("#caca").attr("src"));
        var src = $("#iframe").attr("src")
		$("#iframe").attr("src", $(this).attr("src"))

    });
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

 }


	 cambiarVideo(video){
	 	var src = video;
	 	$(".cont-videos").html('<video poster="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" width="400" height="400" style="width: 100%" autoplay><source src="'+src+'" type="video/mp4"></video>')
	 }

}
