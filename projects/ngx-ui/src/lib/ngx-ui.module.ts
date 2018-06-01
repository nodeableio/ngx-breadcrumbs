import { NgModule } from '@angular/core';

import { NioBreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { NioTimelineModule } from './timeline/timeline.module';

@NgModule({
  imports: [NioBreadcrumbsModule, NioTimelineModule],
  declarations: [],
  exports: [NioBreadcrumbsModule, NioTimelineModule]
})
export class NgxUiModule {}
