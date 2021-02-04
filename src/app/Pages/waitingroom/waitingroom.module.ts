import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitingroomRoutingModule } from './waitingroom-routing.module';
import { WaitingroomComponent } from './waitingroom.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [WaitingroomComponent],
  imports: [
    CommonModule,
    WaitingroomRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class WaitingroomModule { }
