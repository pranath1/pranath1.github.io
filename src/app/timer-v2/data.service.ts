import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private timer: number = 0;
  private pc: number = 0;
  private sc: number = 0;
  private firstTime = true;
  private started = false;
  private time: any;
  private log: string[] = [];

  scEmit = new EventEmitter<number>();
  pcEmit = new EventEmitter<number>();
  paused = new EventEmitter<number>();

  countdown = new Subject<number>();

  constructor() {}

  setTimer(value: number) {
    this.timer = value;
  }

  getLog(): string[] {
    return this.log.slice();
  }

  decideAction(value: number) {
    if (this.firstTime) {
      this.setTimer(value);
      this.firstTime = false;
      this.countdown.next(this.timer);
    }

    if (!this.started) {
      this.time = setInterval(() => {
        this.countdown.next(--this.timer);
        // --this.timer;

        if (this.timer < 0) {
          clearInterval(this.time);
          this.reset();
        }
      }, 1000);

      ++this.sc;
      this.scEmit.emit(this.sc);
      this.log.push('Started at ' + this.logMessage());
    } else {
      ++this.pc;
      this.pcEmit.emit(this.pc);

      this.paused.emit(this.timer);

      this.log.push('Paused at ' + this.logMessage());
      clearInterval(this.time);
    }

    this.started = !this.started;
  }

  logMessage(): string {
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

  reset() {
    clearInterval(this.time);

    this.timer = 0;
    this.sc = 0;
    this.pc = 0;

    this.scEmit.emit(0);
    this.pcEmit.emit(0);
    this.paused.emit(-1);

    this.countdown.next(0);

    this.firstTime = true;
    this.started = false;

    this.log = [];
  }
}
