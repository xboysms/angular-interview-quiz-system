import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/general-model.model';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/cart/product.service';
import { Product } from 'src/app/cart/product-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authUser$: Observable<User> = of();
  defaultLanguage: string = 'en';
  isOpenNavMenu: boolean = false;
  @Output() switchNav: EventEmitter<boolean> = new EventEmitter(false);

  addToCartObs$: Observable<any> = new Observable();
  public productCartItems: Product[] = [];
  readonly promotionCode = '20OFFPROMO';
  discountString: string = "";
  constructor(
    public productService: ProductService
  ) {
    this.addToCartObs$ = this.productService.addToCartObs$;
  }

  ngOnInit(): void {
    this.productService.addToCartObs$.subscribe((res: Product) => {
      if (res.id) this.productCartItems.push(res);
    })
  }

  toggleMainMenu() {
    this.isOpenNavMenu = !this.isOpenNavMenu;
    this.switchNav.emit(this.isOpenNavMenu);
  }

  changeLanguage(event: string) {

  }

  get getDiscountString(): boolean {
    return this.discountString == this.promotionCode;
  }

  get totalPriceBeforeDiscount(): number {
    return this.productCartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get totalPriceIfDiscount100(): number {
    // £20.00 off your total order value when spending £100.00 or more and using the code “20OFFPROMO”
    let total = 0;
    let sumOfTotal = this.productCartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    if (this.getDiscountString && sumOfTotal >= 100) {
      total = 0;
      total = sumOfTotal - 20;
    } 
    if(!this.getDiscountString) {
      total = 0;
      total = sumOfTotal;
    }
    return total;
  }

  get totalPrice(): number {
    let total: number = 0;
    let totalDrink: number = 0;
    let totalCake: number = 0;

    let otherItems: Product[] = this.productCartItems.filter(r => r.category !== "Drinks" && r.category !== "Baking/Cooking Ingredients");
    otherItems.reduce((acc, item) => {
      return total = acc + item.price;
    }, 0);

    // Get 10% off bulk drinks – any drinks are 10% off the listed price (including already reduced items) when buying 10 or more
    let drinkProduct: Product[] = this.productCartItems.filter(r => r.category == "Drinks");
    let countOfDrink = drinkProduct.reduce((acc, item) => {
      return acc + item.price;
    }, 0)
    if (this.getDiscountString && drinkProduct.length == 10) {
      totalDrink = 0;
      totalDrink = drinkProduct.reduce((acc, item) => {
        return acc + item.price;
      }, 0) * 10 / 100;
    }
    if (drinkProduct.length > 0 && drinkProduct.length !== 10) {
      totalDrink = 0;
      totalDrink = drinkProduct.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    }
    if (!this.getDiscountString && drinkProduct.length > 0) {
      totalDrink = 0;
      totalDrink = drinkProduct.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    }

    // £5.00 off your order when spending £50.00 or more on Baking/Cooking Ingredients
    let cakeProducts: Product[] = this.productCartItems.filter(r => r.category == "Baking/Cooking Ingredients");
    let currentTotalCake = cakeProducts.reduce((acc, item) => {
      return acc + item.price;
    }, 0)
    if (this.getDiscountString && currentTotalCake >= 50) {
      totalCake = currentTotalCake - 5;
    } else {
      totalCake = 0;
      totalCake = currentTotalCake;
    }

    const finalResult: number = total + totalDrink + totalCake;
    return this.getDiscountString && finalResult >= 100 ? finalResult - 20 : finalResult;
  }

  deleteItemOnCart(item: Product, index: number) {
    this.productCartItems.splice(index, 1);
  }

  getPromoteCode(events: any, value: string) {
    if (events.keyCode !== 13 && events.code !== "Enter") return;
    this.discountString = value;
  }

}
