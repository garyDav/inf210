import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss'],
  animations   : fuseAnimations
})
export class FirstStepsComponent implements OnInit {
  constructor() {
  }

  /**
   * On init
   */
  ngOnInit(): void {
  }
}
