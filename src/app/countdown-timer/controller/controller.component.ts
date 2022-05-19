import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
})
export class ControllerComponent implements OnInit {
  @Input() pausedAt: number = -1;
  @Output() reset = new EventEmitter<number>();
  @Output() start = new EventEmitter<number>();
  @Output() pause = new EventEmitter();

  timerValue: number = 1;
  started: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  resetValues() {
    // Reset User Input Value
    this.timerValue = 1;
    this.started = false;
    // Emit reset event
    this.reset.emit(0);
  }

  startOrPause() {
    //Determine if start or pause action triggered
    // Emit events accordingly
    if (this.timerValue < 1) return;
    if (!this.started) {
      this.start.emit(this.timerValue);
    } else {
      this.pause.emit();
    }
    this.started = !this.started;
  }
}
