import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero.model'
import { HeroService } from '../hero.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
  heroId: string;
  heroToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.heroId = urlParameters['id'];
    });
    this.heroToDisplay = this.heroService.getHeroById(this.heroId);
  }

}
