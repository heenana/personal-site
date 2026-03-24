import { Recipe } from './types';

export const sugarBeans: Recipe = {
  category: ['main dish', 'dinner', 'lunch'],
  description:
    'A hearty and comforting South African dish of slow-cooked beans in a rich tomato sauce.',
  featured: true,
  id: 'sugar-beans',
  ingredients: [
    '2 cups dried sugar beans (or pinto or kidney beans)',
    '1 large onion, diced',
    '3 cloves garlic, minced',
    '2 tablespoons oil',
    '1 can (14 oz) diced tomatoes',
    '2 tablespoons tomato paste',
    '1 teaspoon paprika',
    '1 teaspoon cumin',
    'Salt and pepper to taste',
    'Fresh cilantro for garnish',
  ],
  instructions: [
    'Soak beans overnight in cold water. Drain and rinse.',
    'Place beans in a pot, cover with fresh water, and bring to a boil.',
    'Reduce heat and simmer for 1-1.5 hours until tender.',
    'In a separate pan, heat oil and sauté onion until soft.',
    'Add garlic and cook for 1 minute.',
    'Add tomatoes, tomato paste, paprika, and cumin.',
    'Drain beans and add to the tomato mixture.',
    'Simmer for 20-30 minutes until sauce thickens.',
    'Season with salt and pepper, garnish with cilantro.',
  ],
  name: 'Sugar Beans',
  photo: '/images/sugar-beans.jpg',
  prepTime: '2 hours (plus overnight soaking)',
  servings: '6',
};
