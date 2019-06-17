import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { DecoratorsGenericsComponent } from './decorators-generics.component';

import { CourseService } from '../academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
  {
    path     : 'dec-generics/:courseId',
    component: DecoratorsGenericsComponent,
    resolve  : {
      academy: CourseService
    }
  }
];

@NgModule({
  declarations: [
    DecoratorsGenericsComponent
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
    DecoratorsGenericsComponent
  ]
})
export class DecoratorsGenericsModule { }
