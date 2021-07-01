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
import { ArticlesComponent } from './articles/articles.component';

// Article Components
import { AsyncComponent } from './articles/async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GlobalTopicsComponent,
    ArticlesComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [ MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
