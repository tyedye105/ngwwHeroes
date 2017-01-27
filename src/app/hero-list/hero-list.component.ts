import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [
    new Hero("Omar", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section"),
    new Hero("Omar2", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section"),
    new Hero("Omar3", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section"),
    new Hero("Omar4", "Ranged Weapons", "Okin", "desciption goes here", "this is the blurb for the featured section")
  ];


  constructor() { }

  ngOnInit() {
  }

}
