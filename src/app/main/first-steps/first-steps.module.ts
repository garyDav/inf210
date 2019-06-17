import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { FirstStepsComponent } from './first-steps.component';

import { CourseService } from '../academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
  {
    path     : 'first-steps/:courseId',
    component: FirstStepsComponent,
    resolve  : {
      academy: CourseService
    }
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
  providers   : [
    CourseService
  ],
  exports     : [
    FirstStepsComponent
  ]
})
export class FirstStepsModule { }
