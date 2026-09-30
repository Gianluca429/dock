import { Component, computed, inject, signal } from '@angular/core';

import { DOCK_PRODUCTS } from '../../../../core/data/products';
import { Product } from '../../../../core/models/product';
import { CartService } from '../../../../core/services/cart.service';

type SetupCategory = 'Workspace' | 'Audio' | 'Power';

@Component({
  selector: 'app-setup-builder',
  templateUrl: './setup-builder.html',
  styleUrl: './setup-builder.scss',
})
export class SetupBuilderComponent {
  private readonly cart = inject(CartService);

  readonly categories: readonly SetupCategory[] = ['Workspace', 'Audio', 'Power'];

  readonly activeCategory = signal<SetupCategory | null>(null);

  readonly selections = signal<Record<SetupCategory, string | null>>({
    Workspace: null,
    Audio: null,
    Power: null,
  });

  readonly confirmationVisible = signal(false);

  readonly selectedItems = computed(() =>
    this.categories
      .map((category) => this.selectedProduct(category))
      .filter((product): product is Product => Boolean(product)),
  );

  readonly total = computed(() =>
    this.selectedItems().reduce((sum, product) => sum + product.price, 0),
  );

  readonly selectedCount = computed(() => this.selectedItems().length);

  productsForCategory(category: SetupCategory): readonly Product[] {
    return DOCK_PRODUCTS.filter((product) => product.category === category);
  }

  selectedProduct(category: SetupCategory): Product | undefined {
    const selectedId = this.selections()[category];

    if (!selectedId) {
      return undefined;
    }

    return DOCK_PRODUCTS.find((product) => product.id === selectedId);
  }

  openCategory(category: SetupCategory): void {
    this.activeCategory.set(category);
    this.confirmationVisible.set(false);
  }

  closeCategory(): void {
    this.activeCategory.set(null);
  }

  selectProduct(product: Product): void {
    const category = product.category as SetupCategory;

    this.selections.update((current) => ({
      ...current,
      [category]: product.id,
    }));

    this.confirmationVisible.set(false);
  }

  removeSelection(category: SetupCategory): void {
    this.selections.update((current) => ({
      ...current,
      [category]: null,
    }));

    this.confirmationVisible.set(false);
  }

  isSelected(productId: string): boolean {
    return Object.values(this.selections()).includes(productId);
  }

  categorySlug(category: string): string {
    return category.toLowerCase();
  }

  clearSetup(): void {
    this.selections.set({
      Workspace: null,
      Audio: null,
      Power: null,
    });

    this.activeCategory.set(null);
    this.confirmationVisible.set(false);
  }

  addSetupToCart(): void {
    const selectedItems = this.selectedItems();

    if (!selectedItems.length) {
      return;
    }

    this.cart.addMany(selectedItems);

    this.selections.set({
      Workspace: null,
      Audio: null,
      Power: null,
    });

    this.activeCategory.set(null);
    this.confirmationVisible.set(true);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  }
}
