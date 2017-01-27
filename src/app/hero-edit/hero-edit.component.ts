import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
@Component({
  selector: 'hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  @Input() selectedHero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  beginUpdatingHero(heroToUpdate) {
    this.heroService.updateHero(heroToUpdate);
  }

  beginDeletingHero(heroToDelete) {
    if(confirm("Are you sure you want to remove this hero from the roster?"))
    this.heroService.deleteHero(heroToDelete)
  }

}
