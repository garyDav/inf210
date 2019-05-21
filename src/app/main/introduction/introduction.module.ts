import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { IntroductionComponent } from './introduction.component';

import { CourseService } from '../academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
  {
    path     : 'introduction/:courseId',
    component: IntroductionComponent,
    resolve  : {
      academy: CourseService
    }
  }
];

@NgModule({
  declarations: [
    IntroductionComponent
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
    IntroductionComponent
  ]
})
export class IntroductionModule { }
