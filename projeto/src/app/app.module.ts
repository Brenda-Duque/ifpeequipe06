import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MjanainaComponent } from './mjanaina/mjanaina.component';

@NgModule({
  declarations: [
    AppComponent,
    MjanainaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
