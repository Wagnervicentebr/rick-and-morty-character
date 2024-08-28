import {MatTabsModule} from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
