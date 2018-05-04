import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelHerosComponent } from './component/marvel-heros/marvel-heros.component';
import { AddMarvelHeroComponent } from './component/add-marvel-hero/add-marvel-hero.component';

const routes: Routes = [
  { path: 'marvel-heros', component: MarvelHerosComponent },
  { path: 'add-marvel-hero', component: AddMarvelHeroComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
