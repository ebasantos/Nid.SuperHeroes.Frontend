import { Component, OnInit } from '@angular/core';
import { Hero } from './model/heroes';
import { HEROES } from './mock/mock.heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero = { name: '', id: 0, photo: '' };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit() {}
}
