export type CategoryPageKey = 'workspace' | 'audio' | 'power';

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

  audio: {
    category: 'Audio',

    eyebrow: 'AUDIO · LISTEN · FOCUS',

    title: 'Il suono giusto,',
    titleMuted: 'senza rumore intorno.',

    description:
      'Dispositivi pensati per ascoltare, concentrarti e dare più spazio a ciò che vuoi sentire davvero.',

    heroProductIds: ['pulse-s1', 'halo-max', 'audio'],

    editorialEyebrow: 'LISTEN · FOCUS · RELAX',
    editorialTitle: 'Più presenza nel suono. Meno distrazioni intorno.',
    editorialImage: '/assets/hero-slide-02-audio.png',

    productsEyebrow: 'AUDIO EDIT',
    productsTitle: 'Ascolto, focus e tempo libero.',

    ctaEyebrow: 'BUILD YOUR SETUP',
    ctaTitle: 'L’Audio trova il suo posto.',
    ctaText:
      'Abbinalo a Workspace e Power e costruisci un setup più completo, coerente e personale.',
  },

  power: {
    category: 'Power',

    eyebrow: 'POWER · CHARGE · CONNECT',

    title: 'Energia dove serve,',
    titleMuted: 'senza ingombro.',

    description:
      'Soluzioni compatte per ricaricare, collegare e tenere i tuoi dispositivi pronti durante tutta la giornata.',

    heroProductIds: ['power', 'charge-d2', 'base-q1'],

    editorialEyebrow: 'CHARGE · CONNECT · MOVE',
    editorialTitle: 'Più energia. Meno cavi a dettare lo spazio.',
    editorialImage: '/assets/hero-slide-03-power.png',

    productsEyebrow: 'POWER EDIT',
    productsTitle: 'Sempre pronto, ovunque serva.',

    ctaEyebrow: 'BUILD YOUR SETUP',
    ctaTitle: 'La potenza completa il setup.',
    ctaText:
      'Unisci Power, Workspace e Audio e costruisci una configurazione pensata intorno alla tua quotidianità.',
  },
};
