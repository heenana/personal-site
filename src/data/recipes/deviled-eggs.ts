import { Recipe } from './types';

export const classicDeviledEggs: Recipe = {
  category: ['side'],
  cookTime: '12 minutes',
  description:
    'Simple and delicious deviled eggs with a creamy filling, garnished with paprika and fresh chives.',
  featured: true,
  id: 'classic-deviled-eggs',
  ingredients: [
    '6 large eggs',
    '3 tablespoons mayonnaise',
    '1 teaspoon yellow mustard',
    '1 teaspoon vinegar',
    'Salt and pepper to taste',
    'Paprika, for garnish',
    'Fresh chives, chopped (for garnish)',
  ],
  instructions: [
    {
      details:
        'Place eggs in a single layer in a saucepan and cover with water by 1 inch. Bring to a boil over high heat. Once boiling, remove from heat, cover, and let stand for 12 minutes.',
      step: 'Boil the eggs:',
    },
    {
      details:
        'Transfer eggs to a bowl of ice water and let cool for 5 minutes. Peel the eggs under cool running water.',
      step: 'Cool the eggs:',
    },
    {
      details:
        'Slice eggs in half lengthwise. Carefully remove yolks and place in a medium bowl. Arrange egg white halves on a serving platter.',
      step: 'Prepare the filling:',
    },
    {
      details:
        'Mash yolks with a fork until smooth. Add mayonnaise, yellow mustard, vinegar, salt, and pepper. Mix until creamy and well combined.',
      step: 'Mix the filling:',
    },
    {
      details:
        'Spoon or pipe the yolk mixture into the egg white halves. Sprinkle with paprika and top with chopped fresh chives.',
      step: 'Fill and garnish:',
    },
    {
      details:
        'Refrigerate for at least 30 minutes before serving for best flavor. Can be made up to 24 hours ahead.',
      step: 'Chill and serve:',
    },
  ],
  name: 'Classic Deviled Eggs',
  photo: '/images/devils-eggs.png',
  prepTime: '10 minutes',
  servings: '6 (2 halves each)',
  tips: 'Use Dijon mustard for a richer flavor. For easier peeling, use eggs that are at least a week old. For a neater presentation, use a piping bag or zip-lock bag with the corner cut off to fill the egg whites.',
  totalTime: '30 minutes',
};
