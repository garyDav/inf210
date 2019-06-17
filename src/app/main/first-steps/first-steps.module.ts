import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatSelectModule,
         MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FirstStepsComponent } from './first-steps.component';
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
    MatStepperModule,

    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),

    FuseSharedModule,
    FuseSidebarModule
  ],
  providers   : [],
  exports     : [
    FirstStepsComponent
  ]
})
export class FirstStepsModule { }
