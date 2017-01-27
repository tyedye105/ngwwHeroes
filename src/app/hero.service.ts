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

 updateHero(localUpdatedHero){
   var heroEntryInFirebase = this.getHeroById(localUpdatedHero.$key);
   heroEntryInFirebase.update({name: localUpdatedHero.name,
                               race: localUpdatedHero.race,
                               specialty: localUpdatedHero.specialty,
                               description: localUpdatedHero.description,
                               blurb: localUpdatedHero.blurb,
                               featured: localUpdatedHero.featured});
 }

 deleteHero(localHeroToDelete) {
   var heroEntryInFirebase = this.getHeroById(localHeroToDelete.$key);
   heroEntryInFirebase.remove();
 }
}
