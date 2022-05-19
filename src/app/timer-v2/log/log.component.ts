import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit, DoCheck {
  log: string[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.log = this.data.getLog();
  }

  ngDoCheck(): void {
    this.log = this.data.getLog();
  }
}
