import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
//import { };

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

 heros$ : Observable<Hero[]>;
 private searchwords = new Subject<string>(); 
 constructor(private heroService:HeroService) { }

  search(words:string):void{
    this.searchwords.next(words);
  }
  
  ngOnInit() : void {
    this.heros$ = this.searchwords.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((words:string)=> this.heroService.searchhero(words)),

    )
    console.log(this.heros$);
  }

}
