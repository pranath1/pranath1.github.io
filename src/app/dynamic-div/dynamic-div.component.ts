import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css'],
})
export class DynamicDivComponent implements OnInit {
  lists: number[] = [1, 2];
  private offSet: number = 0;
  private scrolled = false;
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    if (this.scrolled) return;
    this.scrolled = true;
    console.log(event);

    if (this.offSet < window.pageYOffset) {
      this.offSet = window.pageYOffset;

      let length = this.lists.length;
      this.lists.push(length + 1, length + 2);
    }
    // let id: string = length.toString();
    // document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      this.scrolled = false;
    }, 500);
  }

  constructor() {}

  ngOnInit(): void {}

  buttonClicked(id: number) {
    let position;
    switch (id % 10) {
      case 1:
        position = id + 'st';
        break;
      case 2:
        position = id + 'nd';
        break;
      case 3:
        position = id + 'rd';
        break;
      default:
        position = id + 'th';
        break;
    }

    if (id == 11 || id == 12 || id == 13) position = id + 'th';

    alert(`Button in ${position} div clicked`);
  }
}
