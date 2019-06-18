import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatSelectModule,
         MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ClassComponent } from './class.component';
import { FuseSidebarModule } from '@fuse/components';

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
    path     : 'class',
    component: ClassComponent
  }
];

@NgModule({
  declarations: [ClassComponent],
  imports     : [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,

    HighlightModule.forRoot({
      languages: hljsLanguages
    }),

    FuseSharedModule,
    FuseSidebarModule
  ],
  providers   : [],
  exports     : [
    ClassComponent
  ]
})
export class ClassModule { }
