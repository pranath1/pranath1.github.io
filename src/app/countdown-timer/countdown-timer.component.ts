import { Component, OnInit, ViewChild } from '@angular/core';
import { ControllerComponent } from './controller/controller.component';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent implements OnInit {
  @ViewChild(ControllerComponent, { static: false })
  private controller!: ControllerComponent;

  timerValue = 0;
  pausedValue = -1;
  firstTime = true;
  log: string[] = [];
  timer: any;
  startCounter = 0;
  pauseCounter = 0;

  constructor() {}

  ngOnInit(): void {}

  start(value: number) {
    // if first time set the timervalue
    if (this.firstTime) {
      this.timerValue = value;
      this.firstTime = false;
    }

    // start the timer
    this.timer = setInterval(this.timerFunc.bind(this), 1000);
    // increase the start counter
    this.startCounter++;
    this.log.push('Started at ' + this.formatTimeStamp());
  }

  timerFunc() {
    // console.log(this.timerValue);
    if (this.timerValue > 0) this.timerValue--;
    else {
      clearInterval(this.timer);
      this.controller.resetValues();
    }
  }

  pause() {
    // Pause the timer
    clearInterval(this.timer);
    //Note the value when paused
    this.pausedValue = this.timerValue;
    // Increses the pause counter
    this.pauseCounter++;

    this.log.push('Paused at ' + this.formatTimeStamp());
  }

  // Reset all values and flags and clear interval
  resetAll(value: number) {
    clearInterval(this.timer);

    this.timerValue = value;
    this.pausedValue = value - 1;
    this.firstTime = true;

    this.log = [];

    this.startCounter = value;
    this.pauseCounter = value;
  }

  formatTimeStamp(): string {
    let date = new Date();
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return (
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear() +
      '  ' +
      strTime
    );
  }
}
