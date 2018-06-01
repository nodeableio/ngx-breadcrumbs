import { NgModule } from '@angular/core';

import { NioBreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { NioTimelineModule } from './timeline/timeline.module';
import { NioToastModule } from './toast/toast.module';

@NgModule({
  imports: [NioBreadcrumbsModule, NioTimelineModule, NioToastModule],
  declarations: [],
  exports: [NioBreadcrumbsModule, NioTimelineModule, NioToastModule]
})
export class NgxUiModule {}
