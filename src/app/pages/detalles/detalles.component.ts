import {
  Component,
  OnInit,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Rickandmorty, Result } from '../../interfaces/rickandmorty';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  rickiService = inject(RickandmortyService);

  selectedId = Number(this.route.snapshot.params['id']);
  character = toSignal(this.rickiService.getCharacter(this.selectedId));

 
}
