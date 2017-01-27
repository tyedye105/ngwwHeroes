import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class HeroService {
  heroes: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.heroes = angularFire.database.list('heroes');
 }
 getHeroById(heroId: string){
   return this.angularFire.database.object('heroes/' + heroId);
 }
 addHero(newHero: Hero) {
   this.heroes.push(newHero);
 }
 getHeroes() {
   return this.heroes;
 }
}
