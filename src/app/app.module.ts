import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WatermarkDirective } from './watermark.directive';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { ListboxComponent } from './listbox/listbox.component';
import { MyuppercasePipe } from './myuppercase.pipe';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadJokeComponent } from './load-joke/load-joke.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    WatermarkDirective,
    AutoInputWidthDirective,
    ListboxComponent,
    MyuppercasePipe,
    AboutComponent,
    NotFoundComponent,
    LoadJokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TodolistComponent},
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent},  // die Reihenfolge beim Routing ist sehr wichtig.
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
