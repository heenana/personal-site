import { Recipe } from './types';

export const paneerButterMasala: Recipe = {
  category: ['main dish', 'dinner', 'lunch'],
  description:
    'A rich and creamy Indian curry with soft paneer cubes in a tomato-based sauce.',
  featured: false,
  id: 'paneer-butter-masala',
  ingredients: [
    '400g paneer, cubed',
    '2 tablespoons butter',
    '1 tablespoon oil',
    '1 large onion, finely chopped',
    '2 teaspoons ginger-garlic paste',
    '4 large tomatoes, pureed',
    '1/2 cup heavy cream',
    '1 teaspoon garam masala',
    '1 teaspoon red chili powder',
    '1 teaspoon coriander powder',
    '1/2 teaspoon turmeric',
    'Salt to taste',
    'Fresh cilantro for garnish',
  ],
  instructions: [
    'Heat butter and oil in a pan over medium heat.',
    'Add onions and sauté until golden brown.',
    'Add ginger-garlic paste and cook for 1 minute.',
    'Add tomato puree and cook for 10 minutes until oil separates.',
    'Add all spices and salt, cook for 2 minutes.',
    'Add cream and mix well.',
    'Add paneer cubes and simmer for 5 minutes.',
    'Garnish with cilantro and serve with naan or rice.',
  ],
  name: 'Paneer Butter Masala',
  photo: '/images/paneer-butter-masala2.png',
  prepTime: '30 minutes',
  servings: '4',
};
