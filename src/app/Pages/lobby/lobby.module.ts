import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LobbyModule { }
