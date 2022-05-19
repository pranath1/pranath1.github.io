import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarksTableRoutingModule } from './marks-table-routing.module';
import { MarksTableComponent } from './marks-table.component';


@NgModule({
  declarations: [
    MarksTableComponent
  ],
  imports: [
    CommonModule,
    MarksTableRoutingModule
  ]
})
export class MarksTableModule { }
