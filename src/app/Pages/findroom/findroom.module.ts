import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindroomRoutingModule } from './findroom-routing.module';
import { FindroomComponent } from './findroom.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FindroomComponent],
  imports: [
    CommonModule,
    FindroomRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class FindroomModule { }
