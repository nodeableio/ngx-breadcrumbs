import { NgModule } from '@angular/core';
import { NgxUiComponent } from './ngx-ui.component';
import { NioBreadcrumbsModule } from './breadcrumbs';
import { NioTimelineModule } from './timeline';

@NgModule({
  imports: [NioBreadcrumbsModule, NioTimelineModule],
  declarations: [NgxUiComponent],
  exports: [NgxUiComponent, NioBreadcrumbsModule, NioTimelineModule]
})
export class NgxUiModule {}
