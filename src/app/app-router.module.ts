import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMainComponent } from './blog-content/angular/angular.component';
import { GoMainComponent } from './blog-content/go/go.component';
import { HtmlCssMainComponent } from './blog-content/html-css/html-css.component';
import { JsMainComponent } from './blog-content/js/js.component';
import { ReactMainComponent } from './blog-content/react/react.component';
import { GlobalTopicsComponent } from './global-topics/global-topics.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    // { path: 'topics', component: GlobalTopicsComponent, pathMatch: 'full', children: [
    //     {path: 'html-css', component: HtmlCssMainComponent},
    //     {path: 'js', component: JsMainComponent},
    //     {path: 'angular', component: AngularMainComponent},
    //     {path: 'react', component: ReactMainComponent},
    //     {path: 'go', component: GoMainComponent},
    // ]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})


export class AppRouterModule {}