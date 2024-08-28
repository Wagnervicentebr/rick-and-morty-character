import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Character } from 'src/app/shared/models/character';
import { ResposesCharaceter } from 'src/app/shared/models/responses-character';
import { CharacterService } from 'src/app/shared/services/character/character-service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  loading: boolean = false;
  showButtonScrollTop: boolean = false;
  currentPageUrl: string | null = null;
  hasMore: boolean = true;
  scrollSubscription: Subscription | undefined;

  private scrollHeight = 800;

  characters: Character[] = [];
  searchCharacter: FormControl = new FormControl('');

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterService: CharacterService,
  ) {}

  ngOnInit(): void {
    this.searchCharacter.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => query ? this.characterService.getCharacterBySearchName(query) : this.characterService.getAllCharacter()),
      tap(response => {
        this.characters = response.results;
        this.currentPageUrl = response.info.next;
        this.hasMore = !!response.info.next;
      })
    ).subscribe();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const yoffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButtonScrollTop = (yoffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    if (this.hasMore && this.currentPageUrl) {
      this.loadMoreCharacters(this.currentPageUrl);
    }
  }

  loadMoreCharacters(urlNextPage: string): void {
    this.characterService.nextPage(urlNextPage).pipe(
      tap(response => {
        this.characters = [...this.characters, ...response.results];
        this.currentPageUrl = response.info.next;
        this.hasMore = !!response.info.next;
      })
    ).subscribe();
  }
}
