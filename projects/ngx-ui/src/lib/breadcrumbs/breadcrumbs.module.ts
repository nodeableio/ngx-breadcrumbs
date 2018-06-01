import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NioBreadcrumbsComponent } from './components/breadcrumbs.component';
import { NioBreadcrumbsService } from './services/breadcrumbs.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NioBreadcrumbsComponent],
  providers: [NioBreadcrumbsService],
  exports: [NioBreadcrumbsComponent]
})
export class NioBreadcrumbsModule {}
