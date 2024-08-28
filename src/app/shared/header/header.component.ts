import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute,  Router } from '@angular/router';
import { FavoritesService } from '../services/favorites/favorites.service';
import { Character } from '../models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  tableActive: string = '';
  favorites$: Observable<Character[]> = this.favoritesService.favorites$

  constructor(
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url.includes('favorites')) {
        this.tableActive = 'favorites';
      } else {
        this.tableActive = 'home';
      }
    });

  }

  onTabChanged(event: number) {
    switch (event) {
      case 0:
        this.router.navigate(['/'])
        break;
      case 1:
        this.router.navigate(['/character/favorites']);
        break;
      default:
        this.router.navigate(['/'])
        break;
    }
  }
}
