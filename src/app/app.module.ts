import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Photo1Component } from './photos/components/photo1/photo1.component';
import { Photo2Component } from './photos/components/photo2/photo2.component';
import { DefaultComponent } from './default/default.component'

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    Photo1Component,
    Photo2Component,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
