import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { PanelComponent } from './panel/panel.component';
import {MatListModule} from '@angular/material/list';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    GameComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatButtonModule,
    MatListModule,
    StoreModule
  ]
})
export class GameModule { }
