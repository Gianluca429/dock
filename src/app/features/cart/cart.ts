import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  readonly cart = inject(CartService);

  readonly clearConfirmationVisible = signal(false);
  readonly checkoutNoticeVisible = signal(false);

  increaseQuantity(code: string, quantity: number): void {
    this.cart.setQuantity(code, quantity + 1);
  }

  decreaseQuantity(code: string, quantity: number): void {
    this.cart.setQuantity(code, quantity - 1);
  }

  removeItem(code: string): void {
    this.cart.remove(code);
    this.clearConfirmationVisible.set(false);
  }

  requestClearCart(): void {
    this.clearConfirmationVisible.set(true);
  }

  cancelClearCart(): void {
    this.clearConfirmationVisible.set(false);
  }

  clearCart(): void {
    this.cart.clear();
    this.clearConfirmationVisible.set(false);
    this.checkoutNoticeVisible.set(false);
  }

  showCheckoutNotice(): void {
    this.checkoutNoticeVisible.set(true);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  }
}
