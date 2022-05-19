import { Component, OnInit } from '@angular/core';
import { Marks } from './marks';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css'],
})
export class MarksTableComponent implements OnInit {
  primaryResults: Marks[] = [];
  displayResults: Marks[] = [];
  columns: string[] = [];
  headers: Marks[] = [];
  constructor() {}

  ngOnInit(): void {
    fetch('./assets/data/marks.json')
      .then((res) => res.json())
      .then((marks) => {
        this.primaryResults = marks;
        this.displayResults = this.primaryResults.slice();
        console.log(this.displayResults);

        this.columns = [...Object.keys(this.primaryResults[0])];
        for (let h of this.columns) {
          let obj = {
            header: h,
            count: 0,
          };

          this.headers.push(obj);
        }

        // console.log(this.headers[0]);
      });
  }

  sort(th: string) {
    this.headers.forEach((h) => {
      if (h['header'] === th) {
        h['count'] = (+h['count'] + 1) % 3;
        switch (+h['count']) {
          case 0:
            this.restore();
            break;
          case 1:
            this.sortAscending(th);
            break;
          case 2:
            this.sortDescending(th);
            break;
        }
      }
    });
    // console.log(this.headers);
  }

  sortAscending(th: string) {
    this.displayResults.sort((a, b) =>
      a[th] > b[th] ? 1 : b[th] > a[th] ? -1 : 0
    );
  }

  sortDescending(th: string) {
    this.displayResults.sort((a, b) =>
      a[th] < b[th] ? 1 : b[th] < a[th] ? -1 : 0
    );
  }

  restore() {
    this.displayResults = this.primaryResults.slice();
    this.headers.forEach((h) => (h['count'] = 0));
  }
}
