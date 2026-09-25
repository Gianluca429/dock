import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { DOCK_PRODUCTS } from '../../core/data/products';
import { Product } from '../../core/models/product';
import { CartService } from '../../core/services/cart.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';

import { CATEGORY_PAGE_CONFIG, CategoryPageKey } from './category-page.config';

@Component({
  selector: 'app-category-page',
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss',
})
export class CategoryPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly cart = inject(CartService);

  private readonly categoryKey = this.route.snapshot.data['category'] as CategoryPageKey;

  readonly config = CATEGORY_PAGE_CONFIG[this.categoryKey];

  readonly products = DOCK_PRODUCTS.filter((product) => product.category === this.config.category);

  readonly heroProducts = this.config.heroProductIds
    .map((id) => DOCK_PRODUCTS.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  addToCart(product: Product): void {
    this.cart.add(product);
  }
}
