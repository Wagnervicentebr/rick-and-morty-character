import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/models/character';
import { FavoritesService } from 'src/app/shared/services/favorites/favorites.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {

  favorites$: Observable<Character[]> = this.favoritesService.favorites$

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
  ) {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
