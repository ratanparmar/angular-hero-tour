import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable ,of } from 'rxjs'; 
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

    




@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.herosUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  getHero(id: number): Observable<Hero>{
    const url = `${this.herosUrl}/$id`;
    return this.http.get<Hero>(url);
  }
  constructor(
    private http: HttpClient,
    private messageService:MessageService
    ){}

    private log(message:string){
      this.messageService.add('HeroService :${message}');
    }
    private handleError <T>(operation = 'operation',result ?: T ){
      return (error:any):Observable<T> =>{
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      }
    }
    private herosUrl ='api/heros'; 
}
