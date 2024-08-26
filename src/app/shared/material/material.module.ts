import {MatTabsModule} from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatIconModule,
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
