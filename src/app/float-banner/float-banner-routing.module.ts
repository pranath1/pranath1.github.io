import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatBannerComponent } from './float-banner.component';

const routes: Routes = [{ path: '', component: FloatBannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatBannerRoutingModule { }
