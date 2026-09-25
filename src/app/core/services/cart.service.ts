import { Injectable, computed, signal } from '@angular/core';
import { CartLine, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly storageKey = 'dock-cart';

  private readonly _items = signal<CartLine[]>(this.loadInitialState());

  readonly items = this._items.asReadonly();

  readonly itemCount = computed(() =>
    this._items().reduce((count, line) => count + line.quantity, 0),
  );

  readonly subtotal = computed(() =>
    this._items().reduce(
      (total, line) => total + line.product.price * line.quantity,
      0,
    ),
  );

  add(product: Product, quantity = 1): void {
    if (quantity <= 0) {
      return;
    }

    const current = this._items();
    const existingIndex = current.findIndex(
      (line) => line.product.code === product.code,
    );

    if (existingIndex === -1) {
      this.commit([...current, { product, quantity }]);
      return;
    }

    const next = current.map((line, index) =>
      index === existingIndex
        ? { ...line, quantity: line.quantity + quantity }
        : line,
    );

    this.commit(next);
  }

  addMany(products: readonly Product[]): void {
    if (!products.length) {
      return;
    }

    const next = [...this._items()];

    for (const product of products) {
      const existingIndex = next.findIndex(
        (line) => line.product.code === product.code,
      );

      if (existingIndex === -1) {
        next.push({ product, quantity: 1 });
      } else {
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
      }
    }

    this.commit(next);
  }

  setQuantity(code: string, quantity: number): void {
    if (quantity <= 0) {
      this.remove(code);
      return;
    }

    this.commit(
      this._items().map((line) =>
        line.product.code === code ? { ...line, quantity } : line,
      ),
    );
  }

  remove(code: string): void {
    this.commit(
      this._items().filter((line) => line.product.code !== code),
    );
  }

  clear(): void {
    this.commit([]);
  }

  private commit(items: CartLine[]): void {
    this._items.set(items);
    this.persist(items);
  }

  private persist(items: CartLine[]): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(items));
    } catch {
      // Il carrello continua a funzionare in memoria anche se lo storage
      // del browser non è disponibile.
    }
  }

  private loadInitialState(): CartLine[] {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      const raw = window.localStorage.getItem(this.storageKey);

      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw) as CartLine[];

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed.filter(
        (line) =>
          line &&
          line.product &&
          typeof line.product.code === 'string' &&
          typeof line.product.price === 'number' &&
          typeof line.quantity === 'number' &&
          line.quantity > 0,
      );
    } catch {
      return [];
    }
  }
}
