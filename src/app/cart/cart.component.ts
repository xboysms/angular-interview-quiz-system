import { Component, OnInit } from '@angular/core';
import { Product } from './product-data';
import { ProductService } from './product.service';
import * as _ from "lodash";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productData: Product[] = [];

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  groupedItems: any;
  groupedItemsInArray: any[] = [];
  getProductList() {
    this.productService.getProductList().subscribe((res: Product[]) => {
      this.productData = res;
      this.groupedItems = _.groupBy(this.productData, "category");
      console.log(this.groupedItems);

      Object.entries(this.groupedItems).forEach((r,i) => {
        this.groupedItemsInArray.push({category: r[0], data: r[1]})
      })
      console.log(this.groupedItemsInArray);
    })
  }

  addToCart(item: Product) {
    this.productService.addToCartSubject.next(item);
  }

}
