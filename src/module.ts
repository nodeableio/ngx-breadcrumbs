import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NioBreadcrumbsModule } from './modules';

@NgModule({
    declarations: [],

    imports: [
        CommonModule,
        RouterModule,
        NioBreadcrumbsModule
    ],

    exports: []
})

export class NioUiModule { }
