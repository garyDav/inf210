import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { AdvancedTypesComponent } from './advanced-types.component';

import { CourseService } from '../academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
  {
    path     : 'ad-types/:courseId',
    component: AdvancedTypesComponent,
    resolve  : {
      academy: CourseService
    }
  }
];

@NgModule({
  declarations: [
    AdvancedTypesComponent
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
    AdvancedTypesComponent
  ]
})
export class AdvancedTypesModule { }
