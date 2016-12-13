import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EagerlyLoadedModule, EagerlyLoadedComponent } from './eagerly-loaded';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'eagerly-loaded'},
    { path: 'eagerly-loaded', component: EagerlyLoadedComponent },
    { path: 'lazy-loaded', loadChildren: 'app/lazy-loaded/lazy-loaded.module#LazyLoadedModule'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EagerlyLoadedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
