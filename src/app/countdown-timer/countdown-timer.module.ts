import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CountdownTimerComponent } from './countdown-timer.component';
import { ControllerComponent } from './controller/controller.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { LogComponent } from './log/log.component';
import { RecordComponent } from './record/record.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountdownTimerComponent,
    ControllerComponent,
    DisplayTimerComponent,
    LogComponent,
    RecordComponent,
  ],
  imports: [CommonModule, CountdownTimerRoutingModule, FormsModule],
})
export class CountdownTimerModule {}
