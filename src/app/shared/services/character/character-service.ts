import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map, Observable, of, switchMap, tap } from 'rxjs';
import { ResposesCharaceter } from '../../models/responses-character';
import { FavoritesService } from '../favorites/favorites.service';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = "https://rickandmortyapi.com/api/character"

  constructor(
    private httpClient: HttpClient,
    private favoritesService: FavoritesService
  ) { }


  getAllCharacter(): Observable<ResposesCharaceter> {
    return this.httpClient.get<ResposesCharaceter>(this.baseUrl).pipe(
      switchMap(response => this.verifyIsFavorite(response)),
      catchError(error => this.handleError<ResposesCharaceter>('getAllCharacter', error))
    );
  }

  getCharacterBySearchName(searchName: string):Observable<ResposesCharaceter> {
    return this.httpClient.get<ResposesCharaceter>(`${this.baseUrl}?name=${searchName}`)
      .pipe(
        switchMap(response => this.verifyIsFavorite(response)),
        catchError(error => this.handleError<ResposesCharaceter>('getCharacterBySearchName', error))
      )
  }

  nextPage(urlNextPage: string) {
    return this.httpClient.get<ResposesCharaceter>(urlNextPage)
      .pipe(
        switchMap(response => this.verifyIsFavorite(response)),
        catchError(error => this.handleError<ResposesCharaceter>('nextPage', error))
      )
  }

  verifyIsFavorite(response: ResposesCharaceter): Observable<ResposesCharaceter> {
    return this.favoritesService.favorites$.pipe(
      map((favoriteCharacters) => ({
        ...response,
        results: response.results.map((character: Character) => ({
          ...character,
          isFavorited: favoriteCharacters.some(item => character.id === item.id)
        }))
      }))
    );
  }

  private handleError<T>(operation = 'operation', error: any): Observable<T> {
    console.error(`${operation} failed: ${error.message}`);

    if (error.status === 404) {
      console.warn('No data found for this search, returning empty results.');
      return of(this.getFallbackResponse() as T);
    }

    return of(this.getFallbackResponse() as T);
  }

  private getFallbackResponse(): ResposesCharaceter {
    return {
      info: {
        count: 0,
        pages: 0,
        next: 'null',
        prev: 'null'
      },
      results: []
    };
  }
}
