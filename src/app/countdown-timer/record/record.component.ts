import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  @Input() sc: number = 0;
  @Input() pc: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
