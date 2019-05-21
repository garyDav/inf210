import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { ObjectOrientedProgrammingComponent } from './object-oriented-programming.component';

import { CourseService } from '../academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
  {
    path     : 'poo/:courseId',
    component: ObjectOrientedProgrammingComponent,
    resolve  : {
      academy: CourseService
    }
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
  providers   : [
    CourseService
  ],
  exports     : [
    ObjectOrientedProgrammingComponent
  ]
})
export class ObjectOrientedProgrammingModule { }
