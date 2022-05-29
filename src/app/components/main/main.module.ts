import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  exports: [
      MainComponent
  ]
})
export class MainModule { }
