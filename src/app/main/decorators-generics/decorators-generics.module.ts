import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { DecoratorsGenericsComponent } from './decorators-generics.component';

const routes = [
  {
    path     : 'dec-generics',
    component: DecoratorsGenericsComponent
  }
];

@NgModule({
  declarations: [
    DecoratorsGenericsComponent
  ],
  imports     : [
    RouterModule.forChild(routes),
    FuseSharedModule
  ],
  exports     : [
    DecoratorsGenericsComponent
  ]
})
export class DecoratorsGenericsModule { }
