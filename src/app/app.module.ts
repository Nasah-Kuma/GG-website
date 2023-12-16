import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from "./shared/shared.module";
import { CareerComponent } from './pages/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
