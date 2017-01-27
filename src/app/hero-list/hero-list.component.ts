import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {
    heroes: FirebaseListObservable<any[]>;
  // heroes: Hero[] = [
  //   new Hero("Omar", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section", 1),
  //   new Hero("Omar2", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section", 2),
  //   new Hero("Omar3", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section", 3),
  //   new Hero("Omar4", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section",4 )
  // ];


  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
  // goToDetailPage(clickedHero: Hero) {
  //   this.router.navigate(['heroes', clickedHero.id])
  // }

}
