import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from "@carbon/charts-angular";
import { ButtonModule } from "carbon-components-angular";
import { AngularOpenlayersModule } from "ngx-openlayers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    ChartsModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
