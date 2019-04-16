import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { IntroductionModule } from './main/introduction/introduction.module';
import { FirstStepsModule } from './main/first-steps/first-steps.module';
import { ObjectOrientedProgrammingModule } from './main/object-oriented-programming/object-oriented-programming.module';
import { AdvancedTypesModule } from './main/advanced-types/advanced-types.module';
import { DecoratorsGenericsModule } from './main/decorators-generics/decorators-generics.module';

const appRoutes: Routes = [
    {
        path        : '**',
        redirectTo  : 'introduction'
    },
    {
        path        : 'first-steps',
        redirectTo  : 'first-steps'
    },
    {
        path        : 'poo',
        redirectTo  : 'object-oriented-programming'
    },
    {
        path        : 'ad-types',
        redirectTo  : 'advanced-types'
    },
    {
        path        : 'dec-generics',
        redirectTo  : 'decorators-generics'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        // Other libraries

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        AdvancedTypesModule,
        DecoratorsGenericsModule,
        FirstStepsModule,
        IntroductionModule,
        LayoutModule,
        ObjectOrientedProgrammingModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
