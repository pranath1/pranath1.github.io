import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.css'],
})
export class DisplayTimerComponent implements OnInit {
  timer = 0;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.countdown.subscribe((value: number) => {
      this.timer = value;
    });
  }
}
