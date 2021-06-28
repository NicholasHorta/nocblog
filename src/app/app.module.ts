import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Router Components
import { AppRouterModule } from './app-router.module';

// Service Components
import { MenuService } from './services/menu.service';

// Global Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GlobalTopicsComponent } from './global-topics/global-topics.component';

// Content Components
import { JsMainComponent } from './blog-content/js/js.component';
import { GoMainComponent } from './blog-content/go/go.component';
import { HtmlCssMainComponent } from './blog-content/html-css/html-css.component';
import { AngularMainComponent } from './blog-content/angular/angular.component';
import { ReactMainComponent } from './blog-content/react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GlobalTopicsComponent,
    JsMainComponent,
    GoMainComponent,
    HtmlCssMainComponent,
    AngularMainComponent,
    ReactMainComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [ MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
