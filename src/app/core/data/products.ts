import { Product } from '../models/product';

export const KEYS_K1: Product = {
  id: 'keyboard',
  name: 'Keys K1',
  category: 'Workspace',
  code: 'KY-K1',
  price: 149,
  image: '/assets/products/keys-k1.png',
  description: 'Tastiera compatta pensata per setup essenziali, reattivi e curati.',
};

export const GLIDE_M1: Product = {
  id: 'glide-m1',
  name: 'Glide M1',
  category: 'Workspace',
  code: 'GL-M1',
  price: 79,
  image: '/assets/products/glide-m1.png',
  description: 'Mouse wireless preciso e minimale, progettato per lunghe sessioni alla scrivania.',
};

export const BEAM_L1: Product = {
  id: 'beam-l1',
  name: 'Beam L1',
  category: 'Workspace',
  code: 'BM-L1',
  price: 69,
  image: '/assets/products/beam-l1.png',
  description: 'Light bar da monitor con luce regolabile per lavorare senza affaticare lo spazio.',
};

export const HUB_S1: Product = {
  id: 'hub-s1',
  name: 'Hub S1',
  category: 'Workspace',
  code: 'HU-S1',
  price: 119,
  image: '/assets/products/hub-s1.png',
  description:
    'Hub da scrivania USB-C compatto per tenere connessioni e periferiche sotto controllo.',
};

export const HALO_BUDS: Product = {
  id: 'audio',
  name: 'Halo Buds',
  category: 'Audio',
  code: 'HB-01',
  price: 129,
  image: '/assets/products/halo-buds.png',
  description: 'Auricolari wireless pensati per ascolto quotidiano, focus e movimento.',
};

export const HALO_MAX: Product = {
  id: 'halo-max',
  name: 'Halo Max',
  category: 'Audio',
  code: 'HM-01',
  price: 199,
  image: '/assets/products/halo-max.png',
  description: 'Cuffie over-ear wireless con isolamento avvolgente e comfort per tutto il giorno.',
};

export const PULSE_S1: Product = {
  id: 'pulse-s1',
  name: 'Pulse S1',
  category: 'Audio',
  code: 'PS-S1',
  price: 109,
  image: '/assets/products/pulse-s1.png',
  description: 'Speaker compatto da scrivania con suono pieno e ingombro ridotto.',
};

export const VOICE_M1: Product = {
  id: 'voice-m1',
  name: 'Voice M1',
  category: 'Audio',
  code: 'VM-M1',
  price: 139,
  image: '/assets/products/voice-m1.png',
  description: 'Microfono USB essenziale per call, streaming e registrazioni quotidiane.',
};

export const CHARGE_M1: Product = {
  id: 'power',
  name: 'Charge M1',
  category: 'Power',
  code: 'CH-M1',
  price: 89,
  image: '/assets/products/charge-m1.png',
  description: 'Power bank magnetico compatto per avere energia sempre a portata di mano.',
};

export const CHARGE_D2: Product = {
  id: 'charge-d2',
  name: 'Charge D2',
  category: 'Power',
  code: 'CH-D2',
  price: 129,
  image: '/assets/products/charge-d2.png',
  description:
    'Caricatore desktop doppio per alimentare più dispositivi senza ingombrare la scrivania.',
};

export const CHARGE_T1: Product = {
  id: 'charge-t1',
  name: 'Charge T1',
  category: 'Power',
  code: 'CH-T1',
  price: 79,
  image: '/assets/products/charge-t1.png',
  description:
    'Caricatore da viaggio compatto con porte multiple e formato pensato per muoversi leggero.',
};

export const BASE_Q1: Product = {
  id: 'base-q1',
  name: 'Base Q1',
  category: 'Power',
  code: 'BS-Q1',
  price: 149,
  image: '/assets/products/base-q1.png',
  description: 'Base di ricarica 3-in-1 per smartphone, auricolari e accessori compatibili.',
};

export const DOCK_PRODUCTS: readonly Product[] = [
  KEYS_K1,
  GLIDE_M1,
  BEAM_L1,
  HUB_S1,
  HALO_BUDS,
  HALO_MAX,
  PULSE_S1,
  VOICE_M1,
  CHARGE_M1,
  CHARGE_D2,
  CHARGE_T1,
  BASE_Q1,
];
