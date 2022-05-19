import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatBannerRoutingModule } from './float-banner-routing.module';
import { FloatBannerComponent } from './float-banner.component';


@NgModule({
  declarations: [
    FloatBannerComponent
  ],
  imports: [
    CommonModule,
    FloatBannerRoutingModule
  ]
})
export class FloatBannerModule { }
