import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NioTimelineComponent } from './components/timeline.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NioTimelineComponent],
  exports: [NioTimelineComponent]
})
export class NioTimelineModule {}
