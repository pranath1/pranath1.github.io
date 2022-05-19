import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  sc: number = 0;
  pc: number = 0;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.scEmit.subscribe((value: number) => {
      this.sc = value;
    });

    this.data.pcEmit.subscribe((value: number) => {
      this.pc = value;
    });
  }
}
