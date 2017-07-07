import { Component,OnInit} from '@angular/core';
import {Hero} from './hero/hero';
import {HerolistService} from './services/herolist/herolist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HerolistService]
})


export class AppComponent {
	title="Hero Details";
  
}
