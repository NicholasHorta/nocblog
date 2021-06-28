import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { JsMainComponent } from './content/js/js.component';
import { GoMainComponent } from './content/go/go.component';
import { HtmlMainComponent } from './content/html/html.component';
import { CssMainComponent } from './content/css/css.component';
import { AngMainComponent } from './content/ang/ang.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JsMainComponent,
    GoMainComponent,
    HtmlMainComponent,
    CssMainComponent,
    AngMainComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
