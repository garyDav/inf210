import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdvancedTypesComponent } from './advanced-types.component';

const routes = [
  {
    path     : 'ad-types',
    component: AdvancedTypesComponent
  }
];

@NgModule({
  declarations: [
    AdvancedTypesComponent
  ],
  imports     : [
    RouterModule.forChild(routes),
    FuseSharedModule
  ],
  exports     : [
    AdvancedTypesComponent
  ]
})
export class AdvancedTypesModule { }
