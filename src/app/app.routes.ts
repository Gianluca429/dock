import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { CartComponent } from './features/cart/cart';
import { ShopComponent } from './features/shop/shop';
import { CategoryPageComponent } from './features/category/category-page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'workspace',
    component: CategoryPageComponent,
    data: {
      category: 'workspace',
    },
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
