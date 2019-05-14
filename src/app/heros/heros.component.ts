import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
	heros : Hero[];
	selectedHero : Hero;
	onSelect(hero:Hero):void{
		this.selectedHero = hero;
	}
  getHeroes() : void{
    this.heroService.getHeroes()
    .subscribe(heros=>this.heros=heros);
  }
 
  constructor(private heroService : HeroService) {
  
   }

  ngOnInit() {
    this.getHeroes();
  }

}
