import { Component, computed, inject, signal } from '@angular/core';
import { DOCK_PRODUCTS } from '../../core/data/products';
import { Product } from '../../core/models/product';
import { CartService } from '../../core/services/cart.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';

type ShopCategory = 'All' | 'Workspace' | 'Audio' | 'Power';

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class ShopComponent {
  private readonly cart = inject(CartService);

  readonly categories: readonly ShopCategory[] = [
    'All',
    'Workspace',
    'Audio',
    'Power',
  ];

  readonly selectedCategory = signal<ShopCategory>('All');

  readonly products = computed(() => {
    const category = this.selectedCategory();

    if (category === 'All') {
      return DOCK_PRODUCTS;
    }

    return DOCK_PRODUCTS.filter((product) => product.category === category);
  });

  selectCategory(category: ShopCategory): void {
    this.selectedCategory.set(category);
  }

  addToCart(product: Product): void {
    this.cart.add(product);
  }
}
