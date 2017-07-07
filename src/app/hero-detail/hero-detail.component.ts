import 'rxjs/add/operator/switchMap';
import { Component, OnInit ,Input}        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {HerolistService} from '../services/herolist/herolist.service';

import {Hero} from '../hero/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

@Input()  hero:Hero;
constructor(
  private herolistService: HerolistService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) =>this.herolistService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}
save(): void {
  this.herolistService.update(this.hero)
    .then(() => this.goBack());
}

}
