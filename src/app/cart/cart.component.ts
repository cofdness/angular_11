import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
import {PopupService} from '../popup/popup.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private popupService: PopupService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.popupService.showPopup('Your order has been submitted');
    this.checkoutForm.reset();
  }

}
