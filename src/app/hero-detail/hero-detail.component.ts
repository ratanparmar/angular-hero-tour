import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
@Input() actor : Hero;
getHero(): void {

  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id).subscribe(hero => this.actor=hero);

}

goBack(): void{
  this.location.back();
}


save(): void{
  this.heroService.updateHero(this.actor).
  subscribe(()=>this.location.back());

}
  constructor(

  	private heroService: HeroService,
  	private route: ActivatedRoute,
  	private location: Location

  		) { }

  ngOnInit() {

  	this.getHero();

  }

 

}
