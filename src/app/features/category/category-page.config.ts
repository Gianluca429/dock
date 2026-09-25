export type CategoryPageKey = 'workspace';

export interface CategoryPageConfig {
  category: 'Workspace' | 'Audio' | 'Power';
  eyebrow: string;
  title: string;
  titleMuted: string;
  description: string;
  heroProductIds: readonly string[];
  editorialEyebrow: string;
  editorialTitle: string;
  editorialImage: string;
  productsEyebrow: string;
  productsTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
}

export const CATEGORY_PAGE_CONFIG: Record<CategoryPageKey, CategoryPageConfig> = {
  workspace: {
    category: 'Workspace',

    eyebrow: 'WORKSPACE · FOCUS · FLOW',

    title: 'Costruisci uno spazio',
    titleMuted: 'che lavora con te.',

    description:
      'Strumenti essenziali per una scrivania più ordinata, fluida e pronta a seguirti ogni giorno.',

    heroProductIds: ['keyboard', 'glide-m1', 'beam-l1'],

    editorialEyebrow: 'DESK · FOCUS · FLOW',
    editorialTitle: 'Meno distrazioni. Più spazio per quello che conta.',
    editorialImage: '/assets/hero-slide-01-workspace.png',

    productsEyebrow: 'WORKSPACE EDIT',
    productsTitle: 'Per il tuo spazio quotidiano.',

    ctaEyebrow: 'BUILD YOUR SETUP',
    ctaTitle: 'Il Workspace è solo l’inizio.',
    ctaText:
      'Completa il tuo spazio con Audio e Power e costruisci il setup più adatto alla tua giornata.',
  },
};
