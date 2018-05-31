import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs.component';
import { BreadcrumbsService } from './services/breadcrumbs.service';

@NgModule({
  imports: [CommonModule],
  declarations: [BreadcrumbsComponent],
  providers: [BreadcrumbsService],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {}
