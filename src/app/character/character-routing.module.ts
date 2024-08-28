import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';


const routes: Routes = [
  { path: '', component:  SearchCharacterComponent},
  { path: 'favorites', component: FavoritesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
