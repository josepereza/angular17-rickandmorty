import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { Rickandmorty } from '../../interfaces/rickandmorty';
import { toSignal} from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  rickiService=inject(RickandmortyService)
//  characters:Signal<Rickandmorty | undefined > = toSignal(this.rickiService.getCharacters());

  ngOnInit(): void {
     this.rickiService.getCharacters()
  }

}
