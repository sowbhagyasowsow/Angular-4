import { Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HerolistService} from '../services/herolist/herolist.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./hero.component.css'],
  providers:[HerolistService]
})


export class HeroesComponent {
	title="Hero Details";
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private herolistService: HerolistService){

  }
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

  getHeroes(){
    this.herolistService.getHeroes()
    .then(heroes =>
       this.heroes = heroes
     );
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.herolistService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.herolistService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
