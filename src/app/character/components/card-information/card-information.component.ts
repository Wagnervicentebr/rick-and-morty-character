import { Component, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/shared/models/character';
import { FavoritesService } from 'src/app/shared/services/favorites/favorites.service';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  @Input() character!: Character;

  constructor(
    private favoritesService: FavoritesService,
  ) {}

  ngOnInit(): void { }

  setFavorite(charater: Character) {
    if (charater.isFavorited) {
      this.favoritesService.removeFavorites(charater);
    } else {
      this.favoritesService.addFavorites(charater);
    }
  }

}
