import { classicDeviledEggs } from './deviled-eggs';
import { curryVinaigrette } from './curry-vinaigrette';
import { heenasSignatureSalad } from './signature-salad';
import { paneerButterMasala } from './paneer-butter-masala';
import { sugarBeans } from './sugar-beans';

export type { Recipe } from './types';

export const recipes = [
  classicDeviledEggs,
  curryVinaigrette,
  heenasSignatureSalad,
  paneerButterMasala,
  sugarBeans,
];
