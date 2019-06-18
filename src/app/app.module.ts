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

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { IntroductionModule } from './main/introduction/introduction.module';
import { FirstStepsModule } from './main/first-steps/first-steps.module';
import { ClassModule } from './main/class/class.module';
import { DecoratorsModule } from './main/decorators/decorators.module';
import { ModulesModule } from './main/modules/modules.module';
import { AutomationSystemsModule } from './main/automation-systems/automation-systems.module';
import { TipsModule } from './main/tips/tips.module';
import { TutorialsModule } from './main/tutorials/tutorials.module';
import { HomeComponent } from './main/home/home.component';

const appRoutes: Routes = [
    {
        path     : 'home',
        component: HomeComponent
    },
    {
        path        : '**',
        redirectTo  : 'home'
    },
    {
        path        : 'introduction',
        redirectTo  : 'introduction'
    },
    {
        path        : 'first-steps',
        redirectTo  : 'first-steps'
    },
    {
        path        : 'class',
        redirectTo  : 'class'
    },
    {
        path        : 'decorators',
        redirectTo  : 'decorators'
    },
    {
        path        : 'modules',
        redirectTo  : 'modules'
    },
    {
        path        : 'automation-systems',
        redirectTo  : 'automation-systems'
    },
    {
        path        : 'tips',
        redirectTo  : 'tips'
    },
    {
        path        : 'tutorials',
        redirectTo  : 'tutorials'
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
        NgxYoutubePlayerModule.forRoot(),

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
        IntroductionModule,
        FirstStepsModule,
        LayoutModule,
        ClassModule,
        DecoratorsModule,
        ModulesModule,
        AutomationSystemsModule,
        TipsModule,
        TutorialsModule,

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
