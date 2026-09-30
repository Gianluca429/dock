import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCK_PRODUCTS } from '../../../../core/data/products';
import { Product } from '../../../../core/models/product';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-featured-products',
  imports: [RouterLink],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss',
})
export class FeaturedProductsComponent {
  private readonly cart = inject(CartService);

  readonly products = DOCK_PRODUCTS.filter((product) =>
    ['keyboard', 'audio', 'power'].includes(product.id),
  );

  addToCart(product: Product): void {
    this.cart.add(product);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  }
}
