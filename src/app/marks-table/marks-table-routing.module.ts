import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksTableComponent } from './marks-table.component';

const routes: Routes = [{ path: '', component: MarksTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarksTableRoutingModule { }
