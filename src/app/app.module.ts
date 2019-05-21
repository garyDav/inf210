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

import { SlideshowModule } from 'ng-simple-slideshow';

//Simulate a data server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService }  from './fake-db/fake-db.service';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { IntroductionModule } from './main/introduction/introduction.module';
import { FirstStepsModule } from './main/first-steps/first-steps.module';
import { ObjectOrientedProgrammingModule } from './main/object-oriented-programming/object-oriented-programming.module';
import { AdvancedTypesModule } from './main/advanced-types/advanced-types.module';
import { DecoratorsGenericsModule } from './main/decorators-generics/decorators-generics.module';
import { HomeComponent } from './main/home/home.component';

const appRoutes: Routes = [
    {
        path        : 'academy',
        loadChildren: './main/academy/academy.module#AcademyModule'
    },
    {
        path     : 'home',
        component: HomeComponent
    },
    {
        path        : '**',
        redirectTo  : 'home'
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
        AppComponent,
        HomeComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        // Other libraries

        TranslateModule.forRoot(),
        SlideshowModule,

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
        ObjectOrientedProgrammingModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            FakeDbService, { dataEncapsulation: false }
        )
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
