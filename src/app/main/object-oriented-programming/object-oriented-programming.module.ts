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
import { ObjectOrientedProgrammingComponent } from './object-oriented-programming.component';
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
    ObjectOrientedProgrammingComponent
  ]
})
export class ObjectOrientedProgrammingModule { }
