import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss'],
  animations   : fuseAnimations
})
export class FirstStepsComponent implements OnInit {
  //Youtube player
  id = 'jlIRqe8uvxM';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  //Code style
  response: HighlightResult;
  code1 = `var a=3;
var b="hola";
var c=a+b; // Resultado 3hola
if ("0" == 0) // es true
if ("3" === 3) // es false`
  code2 = `let isDone: boolean = false;`
  code3 = `let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;`
  code4 = `let color: string = "blue"; //
color = 'red';`
  code5 = `let fullName: string = \`Bob Bobbington\`;
let age: number = 37;
let sentence: string = \`Hello, my name is \${ fullName }. I'll be \${ age + 1 } years old next month.\``
  code6 = 
  `let sentence: string = "Hello, my name is " + fullName + "." + "I'll be " + (age + 1) + " years old next month."`
  code7 = `var lyrics = 'Never gonna give you up'; // entre comillas simples
var html = \`<div>\${lyrics}</div>\`; // entre tilde inversa`
  code8 = `let literalString = 'Hello';`

  constructor() {
  }

  /**
   * On init
   */
  ngOnInit(): void {
  }

  //Youtube player
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}
