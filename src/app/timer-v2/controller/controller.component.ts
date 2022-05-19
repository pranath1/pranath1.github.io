import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
})
export class ControllerComponent implements OnInit {
  timerValue: number = 1;
  pausedAt: number = -1;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.paused.subscribe((value: number) => {
      this.pausedAt = value;
    });
  }

  startOrPause() {
    this.data.decideAction(this.timerValue);
  }

  resetValues() {
    this.timerValue = 1;
    this.data.reset();
  }
}
