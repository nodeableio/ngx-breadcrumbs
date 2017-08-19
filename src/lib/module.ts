import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NioBreadcrumbsService } from './breadcrumbs.service';
import { NioBreadcrumbComponent } from './breadcrumbs.component';

@NgModule({
    declarations: [NioBreadcrumbComponent],

    imports: [
        CommonModule
    ],

    exports: [NioBreadcrumbComponent]
})
export class NioBreadcrumbsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NioBreadcrumbsModule,
            providers: [NioBreadcrumbsService]
        };
    }
}