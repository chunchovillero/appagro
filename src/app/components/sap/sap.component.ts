import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('#MyIframe').load(function(){

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
}).addTyping();
})
  }

Imprimir(){
window.print();
}

}
