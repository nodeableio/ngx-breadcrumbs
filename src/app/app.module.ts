import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUiModule } from 'ngx-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
