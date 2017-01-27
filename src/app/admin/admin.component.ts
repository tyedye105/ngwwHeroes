import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HeroService]
})
export class AdminComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }
  submitForm(name: string, race: string, specialty:string, description: string, blurb: string) {
    var newHero: Hero = new Hero(name, specialty, race, description, blurb);
    this.heroService.addHero(newHero);
  }

}
