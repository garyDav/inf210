import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { IntroductionComponent } from './introduction.component';

const routes = [
  {
    path     : 'introduction',
    component: IntroductionComponent
  }
];

@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports     : [
    RouterModule.forChild(routes),
    FuseSharedModule
  ],
  exports     : [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
