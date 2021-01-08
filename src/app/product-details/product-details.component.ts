import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../products';
import {CartService} from '../cart.service';
import {PopupService} from '../popup/popup.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    this.product = products.find(product => product.id === Number(productId));
  }

  addToCart(product): void {
    this.cartService.addToCart(product);
    this.popupService.showPopup('Your product has been added to the cart!');
  }
}
