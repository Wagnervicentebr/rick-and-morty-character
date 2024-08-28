import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritesSubject = new BehaviorSubject<Character[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  addFavorites(character: Character) {
    character.isFavorited = true;
    const favoritesList = this.favoritesSubject.getValue();

    if (!favoritesList.includes(character)) {
      this.favoritesSubject.next([...favoritesList, character]);
    }
  }

  removeFavorites(character: Character) {
    const atuais = this.favoritesSubject.getValue();
    this.favoritesSubject.next(atuais.filter(c => c.id !== character.id));
  }
}
