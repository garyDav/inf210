import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatSelectModule,
         MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ModulesComponent } from './modules.component';
import { FuseSidebarModule } from '@fuse/components';

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
export function hljsLanguages() {
  return [
      {name: 'xml', func: xml},
      {name: 'javascript', func: javascript},
      {name: 'typescript', func: typescript}
  ];
}

const routes = [
  {
    path     : 'modules',
    component: ModulesComponent
  }
];

@NgModule({
  declarations: [ModulesComponent],
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
    ModulesComponent
  ]
})
export class ModulesModule { }
