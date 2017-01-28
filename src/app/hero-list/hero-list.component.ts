import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { HeroService } from '../hero.service';


@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {
    heroes: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;
    filterBySpecialty: string = "all";
    filterByFeatured: boolean = true;

  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  onChange(optionFromMenu) {
    this.filterBySpecialty = optionFromMenu;
  }
  goToDetailPage(clickedHero) {
    this.router.navigate(['heroes', clickedHero.$key]);
  }

}
