import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    SearchCharacterComponent,
    FavoritesListComponent,
    CardInformationComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ]
})
export class CharacterModule { }
