import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-object-oriented-programming',
  templateUrl: './object-oriented-programming.component.html',
  styleUrls: ['./object-oriented-programming.component.scss'],
  animations   : fuseAnimations
})
export class ObjectOrientedProgrammingComponent implements OnInit {
  //Youtube player
  id = 'jlIRqe8uvxM';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  //Code style
  response: HighlightResult;
  code = `{
    "compilerOptions": {
      "module": "commonjs",
      "target": "es5",
      "noImplicitAny": false,
      "sourceMap": false
    },
    "exclude": [
      "node_modules"
    ]
  }`

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
