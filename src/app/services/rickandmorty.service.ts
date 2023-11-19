import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Result, Rickandmorty } from '../interfaces/rickandmorty';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  characters=signal<any>('');

  constructor() {


   }
  httpClient=inject(HttpClient)

  getCharacters(search:string=''){
    this.httpClient.get<any>(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .subscribe(data=>{
this.characters.set(data)
console.log('service chara',this.characters())
console.log('service data',data)

    })
  
    
  }
}
