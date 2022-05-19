import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerV2RoutingModule } from './timer-v2-routing.module';
import { TimerV2Component } from './timer-v2.component';
import { ControllerComponent } from './controller/controller.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { LogComponent } from './log/log.component';
import { RecordComponent } from './record/record.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerV2Component,
    ControllerComponent,
    DisplayTimerComponent,
    LogComponent,
    RecordComponent,
  ],
  imports: [CommonModule, TimerV2RoutingModule, FormsModule],
})
export class TimerV2Module {}
