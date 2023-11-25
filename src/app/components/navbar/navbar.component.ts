import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  rickyService=inject(RickandmortyService)
inputSearch=new FormControl('')

ngOnInit(): void {

  //this.getAll('')
 this.inputSearch.valueChanges.pipe(
  map((search:string | null)=>search?.trim()),
  debounceTime(350),
  distinctUntilChanged(),
 ).subscribe(data=>{
  if (!data){
    data=''
  }
  this.rickyService.getCharacters(data)
  console.log('navbar',data)
  //this.getAll(data)
 })

}
reset(){
  this.inputSearch.setValue(' ')
  this.rickyService.getCharacters(' ')
}
}
