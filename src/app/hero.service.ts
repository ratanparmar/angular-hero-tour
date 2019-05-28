import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable ,of } from 'rxjs'; 
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService:MessageService
    ){}
  
  private herosUrl ='/api/heros';


  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.herosUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero>{
    const url = `${this.herosUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  updateHero(hero:Hero): Observable<any>{
    
    return this.http.put(this.herosUrl, hero, httpOptions)
  }

  addHero (hero: Hero): Observable<Hero> {
  
  return this.http.post<Hero>(this.herosUrl, hero, httpOptions)
}
 
  deleteHero(hero:Hero|number):Observable<Hero>{
  const id =typeof hero === 'number'?hero:hero.id;
  const url = `${this.herosUrl}/${id}`;
  return this.http.delete<Hero>(url,httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  )
}

searchhero(letter:string):Observable<Hero[]>{
  
  if(!letter.trim()){
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.herosUrl}/?name=${letter}`).pipe(
      tap(_ => this.log(`found heroes matching "${letter}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  
}




    private handleError <T>(operation = 'operation',result ?: T ){
      return (error:any):Observable<T> =>{
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      }
    }

    private log(message:string){
      this.messageService.add('HeroService :  ${message}');
    }
     
}
