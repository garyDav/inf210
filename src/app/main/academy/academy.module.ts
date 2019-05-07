import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { CoursesComponent } from 'app/main/academy/courses/courses.component';
import { CourseComponent } from 'app/main/academy/course/course.component';
import { CoursesService } from 'app/main/academy/courses.service';
import { CourseService } from 'app/main/academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
    {
        path     : 'courses',
        component: CoursesComponent,
        resolve  : {
            academy: CoursesService
        }
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: CourseComponent,
        resolve  : {
            academy: CourseService
        }
    },
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent
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
        CoursesService,
        CourseService
    ]
})
export class AcademyModule
{
}
