import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heros: Hero[];

  	constructor(private heroService: HeroService) { }

 	 ngOnInit() {
 	 	this.getheros();

  	}
  	getheros(): void{
  		this.heroService.getHeroes()
  		.subscribe(heros => this.heros=heros.slice(1,5));
  	}

}
