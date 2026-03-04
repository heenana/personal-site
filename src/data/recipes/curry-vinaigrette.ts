import { Recipe } from './types';

export const curryVinaigrette: Recipe = {
  category: ['dressing'],
  cookTime: '0 minutes',
  description:
    'A sweet and savory vinaigrette with warm curry spices, perfect for salads with apples, nuts, and greens.',
  featured: false,
  id: 'curry-vinaigrette-dressing',
  ingredients: [
    '4 tablespoons extra virgin olive oil',
    '3 tablespoons maple syrup',
    '2 tablespoons apple cider vinegar',
    '3 tablespoons yellow mustard',
    '1 teaspoon curry powder',
    '1/2 teaspoon cinnamon',
    '1 teaspoon salt',
    '1/2 teaspoon black pepper',
  ],
  instructions: [
    {
      details:
        'In a medium bowl, add the olive oil, maple syrup, apple cider vinegar, Dijon mustard, curry powder, cinnamon, salt, and black pepper.',
      step: 'Combine ingredients:',
    },
    {
      details:
        'Whisk vigorously for 1-2 minutes until all ingredients are well combined and the dressing is smooth and emulsified.',
      step: 'Whisk until emulsified:',
    },
    {
      details:
        'Taste the dressing and adjust seasoning if needed. Add more salt, pepper, or maple syrup to suit your preference.',
      step: 'Taste and adjust:',
    },
    {
      details:
        'Use immediately or transfer to an airtight container. Refrigerate for up to 1 week. Shake or whisk well before each use as ingredients may separate.',
      step: 'Store or serve:',
    },
  ],
  name: 'Curry Vinaigrette Dressing',
  photo: '/images/curry-vinaigrette3.png',
  prepTime: '5 minutes',
  tips: 'For easier mixing and storage, combine all ingredients in a condiment bottle or mason jar with a tight-fitting lid and shake vigorously for 30 seconds until well blended. This also makes it easy to drizzle over salads!',
  totalTime: '5 minutes',
};
