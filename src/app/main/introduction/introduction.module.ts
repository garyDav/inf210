import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

import { IntroductionComponent } from './introduction.component';

import { CourseService } from '../academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
export function hljsLanguages() {
  return [
      {name: 'javascript', func: javascript},
      {name: 'typescript', func: typescript}
  ];
}

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

    NgxYoutubePlayerModule.forRoot(),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),

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
