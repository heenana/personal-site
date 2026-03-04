export interface LinkedIngredient {
  name: string;
  link: string;
}

export interface InstructionStep {
  step: string;
  details: string;
}

export interface Recipe {
  id: string;
  name: string;
  category: string[];
  photo: string;
  featured: boolean;
  description?: string;
  ingredients?: (string | LinkedIngredient)[];
  instructions?: (string | InstructionStep)[];
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  servings?: string;
  tips?: string;
}
