import { NgModule } from '@angular/core';

import { NioBreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { NioTimelineModule } from './timeline/timeline.module';
import { NioToastModule } from './toast/toast.module';
import { NioWidgetsModule } from './widgets/widgets.module';

@NgModule({
    imports: [
        NioBreadcrumbsModule,
        NioTimelineModule,
        NioToastModule,
        NioWidgetsModule
    ],
    declarations: [],
    exports: [
        NioBreadcrumbsModule,
        NioTimelineModule,
        NioToastModule,
        NioWidgetsModule
    ]
})
export class NgxUiModule {}
