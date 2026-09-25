import { Component, computed, inject, signal } from '@angular/core';
import {
  CHARGE_M1,
  HALO_BUDS,
  KEYS_K1,
} from '../../../../core/data/products';
import { Product } from '../../../../core/models/product';
import { CartService } from '../../../../core/services/cart.service';

interface SetupItem extends Product {
  positionClass: string;
}

@Component({
  selector: 'app-setup-builder',
  templateUrl: './setup-builder.html',
  styleUrl: './setup-builder.scss',
})
export class SetupBuilderComponent {
  private readonly cart = inject(CartService);

  readonly items: SetupItem[] = [
    {
      ...KEYS_K1,
      positionClass: 'setup-product--keyboard',
    },
    {
      ...HALO_BUDS,
      positionClass: 'setup-product--audio',
    },
    {
      ...CHARGE_M1,
      positionClass: 'setup-product--power',
    },
  ];

  readonly selectedIds = signal<string[]>([]);
  readonly confirmationVisible = signal(false);

  readonly selectedItems = computed(() =>
    this.items.filter((item) => this.selectedIds().includes(item.id)),
  );

  readonly total = computed(() =>
    this.selectedItems().reduce((sum, item) => sum + item.price, 0),
  );

  readonly selectedCount = computed(() => this.selectedItems().length);

  toggleItem(id: string): void {
    this.confirmationVisible.set(false);

    this.selectedIds.update((selected) =>
      selected.includes(id)
        ? selected.filter((selectedId) => selectedId !== id)
        : [...selected, id],
    );
  }

  isSelected(id: string): boolean {
    return this.selectedIds().includes(id);
  }

  clearSetup(): void {
    this.selectedIds.set([]);
    this.confirmationVisible.set(false);
  }

  addSetupToCart(): void {
    const selectedItems = this.selectedItems();

    if (!selectedItems.length) {
      return;
    }

    this.cart.addMany(selectedItems);

    // Il setup torna vuoto dopo l'aggiunta: il carrello contiene ormai
    // la configurazione confermata, mentre il builder è pronto per crearne un'altra.
    this.selectedIds.set([]);
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
