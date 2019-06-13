import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-decorators-generics',
  templateUrl: './decorators-generics.component.html',
  styleUrls: ['./decorators-generics.component.scss'],
  animations   : fuseAnimations
})
export class DecoratorsGenericsComponent implements OnInit {

  constructor() {

  }

  /**
   * On init
   */
  ngOnInit(): void {

  }
}
