import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumpComponent } from './dump/dump.component';
import {AppIsVisibleDirective} from './app.isVisible.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumpComponent,
    AppIsVisibleDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
