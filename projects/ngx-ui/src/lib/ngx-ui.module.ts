import { NgModule } from '@angular/core';
import { NgxUiComponent } from './ngx-ui.component';
import { BreadcrumbsModule } from './breadcrumbs';
import { TimelineModule } from './timeline';

@NgModule({
  imports: [BreadcrumbsModule, TimelineModule],
  declarations: [NgxUiComponent],
  exports: [NgxUiComponent, BreadcrumbsModule, TimelineModule]
})
export class NgxUiModule {}
