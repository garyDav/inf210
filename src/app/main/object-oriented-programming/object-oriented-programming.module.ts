import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ObjectOrientedProgrammingComponent } from './object-oriented-programming.component';

const routes = [
  {
    path     : 'poo',
    component: ObjectOrientedProgrammingComponent
  }
];

@NgModule({
  declarations: [
    ObjectOrientedProgrammingComponent
  ],
  imports     : [
    RouterModule.forChild(routes),
    FuseSharedModule
  ],
  exports     : [
    ObjectOrientedProgrammingComponent
  ]
})
export class ObjectOrientedProgrammingModule { }
