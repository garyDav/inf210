import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-object-oriented-programming',
  templateUrl: './object-oriented-programming.component.html',
  styleUrls: ['./object-oriented-programming.component.scss'],
  animations   : fuseAnimations
})
export class ObjectOrientedProgrammingComponent implements OnInit {
  constructor() {
  }

  /**
   * On init
   */
  ngOnInit(): void {
  }
}
