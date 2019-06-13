import { Component, OnInit} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-advanced-types',
  templateUrl: './advanced-types.component.html',
  styleUrls: ['./advanced-types.component.scss'],
  animations   : fuseAnimations
})
export class AdvancedTypesComponent implements OnInit {

  constructor() {
  }

  /**
   * On init
   */
  ngOnInit(): void {
  }

}
