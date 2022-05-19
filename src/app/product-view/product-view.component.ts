import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  productList: Product[] = [];
  buffer: Product[] = [];
  view: 'grid' | 'list' = 'grid';
  constructor() {}

  ngOnInit(): void {
    fetch('./assets/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        this.productList = data;
        this.buffer = this.productList.slice();
      });
  }

  toggleView(toggle: number) {
    this.view = toggle ? 'grid' : 'list';
    console.log(this.view);
  }

  sortByPrice(option: any) {
    console.log(option.target.value);

    switch (option.target.value) {
      case 'rel':
        this.productList = this.buffer.slice();
        console.log(this.productList);

        break;
      case 'asc':
        this.productList.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        console.log(this.productList);

        break;
      case 'desc':
        this.productList.sort((a, b) =>
          a.price < b.price ? 1 : b.price < a.price ? -1 : 0
        );
        console.log(this.productList);

        break;
    }
  }
}
