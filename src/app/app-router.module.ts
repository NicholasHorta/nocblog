import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { AsyncComponent } from './articles/async/async.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {path: 'articles', component: ArticlesComponent, children: [
        {path: 'async-await',  component: AsyncComponent}
    ]},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})


export class AppRouterModule {}