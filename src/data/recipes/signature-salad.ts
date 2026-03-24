import { Recipe } from './types';

export const heenasSignatureSalad: Recipe = {
  category: ['side', 'lunch'],
  cookTime: '15 minutes',
  // description: "A vibrant and flavorful salad featuring quinoa, crisp red apples, walnuts, and mixed greens tossed in a homemade curry vinaigrette.",
  featured: true,
  id: 'heenas-signature-salad',
  ingredients: [
    '1 cup quinoa, uncooked',
    '2 cups water or vegetable broth',
    '4 cups mixed greens (spring mix, arugula, or baby spinach)',
    '1 large red apple, thinly sliced',
    '1/2 cup red onion, thinly sliced',
    '1/2 cup walnuts, roughly chopped',
    '1/3 cup black olives, sliced or whole',
    {
      link: '/recipes/curry-vinaigrette-dressing',
      name: 'Curry vinaigrette dressing (to taste)',
    },
  ],
  instructions: [
    {
      details:
        'Rinse quinoa under cold water in a fine-mesh strainer. In a medium saucepan, combine quinoa and water (or broth). Bring to a boil, then reduce heat to low, cover, and simmer for 12-15 minutes until liquid is absorbed. Remove from heat and let stand covered for 5 minutes, then fluff with a fork. Allow to cool to room temperature.',
      step: 'Cook the quinoa:',
    },
    {
      details:
        'While quinoa cools, wash and dry the mixed greens. Thinly slice the red apple, red onion, and black olives. Roughly chop the walnuts (or keep whole if preferred).',
      step: 'Prepare the ingredients:',
    },
    {
      details:
        'In a large salad bowl, combine the cooled quinoa, mixed greens, sliced apple, red onion, walnuts, and black olives.',
      step: 'Assemble the salad:',
    },
    {
      details:
        'Drizzle with curry vinaigrette dressing to taste (start with about 1/4 cup and add more as desired). Toss gently until all ingredients are evenly coated.',
      step: 'Dress and toss:',
    },
    {
      details:
        'This salad is best enjoyed fresh. If making ahead, keep the dressing separate and toss just before serving to prevent the greens from wilting.',
      step: 'Serve immediately:',
    },
  ],
  name: "Heena's Signature Salad",
  photo: '/images/signature-salad2.png',
  prepTime: '15 minutes',
  servings: '4-6',
  tips: 'For extra flavor and texture, try adding shaved pecorino cheese and dried cranberries to the salad.',
  totalTime: '30 minutes',
};
