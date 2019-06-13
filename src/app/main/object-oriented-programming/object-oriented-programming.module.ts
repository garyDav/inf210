import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { ObjectOrientedProgrammingComponent } from './object-oriented-programming.component';

import { FuseSidebarModule } from '@fuse/components';

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
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    FuseSharedModule,
    FuseSidebarModule
  ],
  providers   : [],
  exports     : [
    ObjectOrientedProgrammingComponent
  ]
})
export class ObjectOrientedProgrammingModule { }
