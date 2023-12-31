import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Result, Rickandmorty } from '../interfaces/rickandmorty';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  characters=signal<any>('');
  search=signal<any>('')
  constructor() {


   }
  httpClient=inject(HttpClient)

  getCharacters(search?:string){
    if (search){
          this.search.set(search)

    }
    this.httpClient.get<Rickandmorty>(`https://rickandmortyapi.com/api/character/?name=${this.search()}`)
    .subscribe(data=>{
this.characters.set(data.results)
console.log('service chara',this.characters())
console.log('service data',data)

    })
  
    
  }

  getCharacter(id:number):Observable<Result>{
    return this.httpClient.get<Result>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
