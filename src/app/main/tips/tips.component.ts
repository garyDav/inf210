import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
  animations   : fuseAnimations
})
export class TipsComponent implements OnInit {
  //Code style
  response: HighlightResult;
code1 = ``
code2 = ``
code3 = ``
code4 = ``
code5 = ``
code6 = ``
code7 = ``
code8 = ``
code9 = ``
code10 = ``
code11 = ``
code12 = ``
code13 = ``
code14 = ``

  constructor() { }

  ngOnInit() {
  }

}
