import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CategoryCard {
  title: string;
  eyebrow: string;
  description: string;
  link: string;
  productImage: string;
}

@Component({
  selector: 'app-category-showcase',
  imports: [RouterLink],
  templateUrl: './category-showcase.html',
  styleUrl: './category-showcase.scss',
})
export class CategoryShowcaseComponent {
  readonly categories: CategoryCard[] = [
    {
      title: 'Workspace',
      eyebrow: 'DESK · FOCUS · FLOW',
      description:
        'Strumenti essenziali per una postazione più ordinata, funzionale e piacevole da usare.',
      link: '/workspace',
      productImage: '/assets/products/workspace-product.png',
    },
    {
      title: 'Audio',
      eyebrow: 'LISTEN · FOCUS · RELAX',
      description:
        'Speaker, cuffie e accessori selezionati per accompagnare lavoro, musica e tempo libero.',
      link: '/audio',
      productImage: '/assets/products/audio-product.png',
    },
    {
      title: 'Power',
      eyebrow: 'CHARGE · CONNECT · MOVE',
      description:
        'Dock, hub e soluzioni di ricarica pensate per tenere tutto connesso senza confusione.',
      link: '/power',
      productImage: '/assets/products/power-product.png',
    },
  ];
}
