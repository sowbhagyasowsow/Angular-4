import {Component} from '@angular/core';
import {HerolistService} from '../services/herolist/herolist.service';
import {Hero} from '../hero/hero';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  providers:[HerolistService],
  styleUrls: ['./dashboard.component.css'],

  // styleUrls: ['../app.component.css'],
})

export class DashboardComponent{
  selectedHero:Hero;
  heroes:Hero[];

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
      {
        console.log(heroes);
        this.heroes   = heroes.slice(1, 5)
      }
     );
  }
}
