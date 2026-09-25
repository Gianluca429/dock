import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { CartComponent } from './features/cart/cart';
import { ShopComponent } from './features/shop/shop';

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
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
