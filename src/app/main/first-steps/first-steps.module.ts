import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { FirstStepsComponent } from './first-steps.component';

import { FuseSidebarModule } from '@fuse/components';

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
    FirstStepsComponent
  ]
})
export class FirstStepsModule { }
