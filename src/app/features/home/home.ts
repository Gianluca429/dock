import { Component } from '@angular/core';
import { CategoryShowcaseComponent } from './components/category-showcase/category-showcase';
import { FeaturedProductsComponent } from './components/featured-products/featured-products';
import { HeroComponent } from './components/hero/hero';
import { SetupBuilderComponent } from './components/setup-builder/setup-builder';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CategoryShowcaseComponent,
    FeaturedProductsComponent,
    SetupBuilderComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
