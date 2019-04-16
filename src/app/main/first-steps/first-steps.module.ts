import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FirstStepsComponent } from './first-steps.component';

const routes = [
  {
    path     : 'first-steps',
    component: FirstStepsComponent
  }
];

@NgModule({
  declarations: [
    FirstStepsComponent
  ],
  imports     : [
    RouterModule.forChild(routes),
    FuseSharedModule
  ],
  exports     : [
    FirstStepsComponent
  ]
})
export class FirstStepsModule { }
