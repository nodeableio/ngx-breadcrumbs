import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NioDividerComponent } from './components/index';

@NgModule({
  imports: [CommonModule],
  declarations: [NioDividerComponent],
  exports: [NioDividerComponent]
})
export class NioWidgetsModule {}
