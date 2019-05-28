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
  addHero(name:string): void{
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as  Hero).
    subscribe(hero=>{this.heros.push(hero)});
  }
 
  deleteHero(hero:Hero) : void{
    this.heros =this.heros.filter(h=>h!== hero); 
    this.heroService.deleteHero(hero).subscribe();
  }
  constructor(private heroService : HeroService) {
  
   }

  ngOnInit() {
    this.getHeroes();
  }

}
