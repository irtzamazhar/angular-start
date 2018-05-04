import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MarvelHerosComponent } from './component/marvel-heros/marvel-heros.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddMarvelHeroComponent } from './component/add-marvel-hero/add-marvel-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarvelHerosComponent,
    AddMarvelHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
