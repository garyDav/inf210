import { Component, OnInit } from '@angular/core';

import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
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
  code2 = `{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "0.1.0",
  "command": "tsc",
  "isShellCommand": true,
  "args": ["-p", "."],
  "showOutput": "silent",
  "problemMatcher": "$tsc"
}`
  code3=`{
  "compilerOptions": {
  "module": "commonjs",
  "target": "es5",
  "noImplicitAny": false,
  "sourceMap": true
  },
  "exclude": [
  "node_modules"
  ]
}`
  code4=`{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Iniciar",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceRoot}/app.ts",
      "stopOnEntry": false,
      "args": [],
      "cwd": "\${workspaceRoot}",
      "preLaunchTask": null,
      "runtimeExecutable": null,
      "runtimeArgs": [
        "--nolazy"
      ],
      "env": {
        "NODE_ENV": "development"
      },
      "externalConsole": false,
      "sourceMaps": true,
      "outDir": null
    },
    {
      "name": "Asociar",
      "type": "node",
      "request": "attach",
      "port": 5858,
      "address": "localhost",
      "restart": false,
      "sourceMaps": false,
      "outDir": null,
      "localRoot": "\${workspaceRoot}",
      "remoteRoot": null
    },
    {
      "name": "Attach to Process",
      "type": "node",
      "request": "attach",
      "processId": "\${command.PickProcess}",
      "port": 5858,
      "sourceMaps": false,
      "outDir": null
    }
  ]
}`
  code5=`"sourceMaps": true,
"program": "\${workspaceRoot}/app.ts",`

  //Stepper
  isLinear = false;

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
