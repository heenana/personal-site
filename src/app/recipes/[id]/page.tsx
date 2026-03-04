import Header from '@/components/Header';
import styles from './recipe.module.css';
import Image from 'next/image';
import { Playfair_Display, Lora, Work_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { recipes } from '@/data/recipes/index';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.heroImage}>
            <Image
              fill
              priority
              alt={recipe.name}
              src={recipe.photo}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.content}>
            <Link className={`${styles.backLink} ${workSans.className}`} href="/recipes">
              ← Back to All Recipes
            </Link>
            <h1 className={playfair.className}>{recipe.name}</h1>

            {(recipe.prepTime ||
              recipe.cookTime ||
              recipe.totalTime ||
              recipe.servings) && (
              <div className={`${styles.meta} ${workSans.className}`}>
                {recipe.prepTime && (
                  <span>
                    <span className={styles.metaLabel}>Prep:</span> {recipe.prepTime}
                  </span>
                )}
                {recipe.cookTime && (
                  <>
                    {recipe.prepTime && <span className={styles.metaSeparator}>|</span>}
                    <span>
                      <span className={styles.metaLabel}>Cook:</span> {recipe.cookTime}
                    </span>
                  </>
                )}
                {recipe.totalTime && (
                  <>
                    {(recipe.prepTime || recipe.cookTime) && <span className={styles.metaSeparator}>|</span>}
                    <span>
                      <span className={styles.metaLabel}>Total:</span> {recipe.totalTime}
                    </span>
                  </>
                )}
                {recipe.servings && (
                  <>
                    {(recipe.prepTime ||
                      recipe.cookTime ||
                      recipe.totalTime) && <span className={styles.metaSeparator}>|</span>}
                    <span><span className={styles.metaLabel}>Servings:</span> {recipe.servings}</span>
                  </>
                )}
              </div>
            )}
            {recipe.description && (
              <p className={`${styles.description} ${lora.className}`}>
                {recipe.description}
              </p>
            )}
            {recipe.ingredients && (
              <div className={styles.section}>
                <h2 className={playfair.className}>Ingredients</h2>
                <ul className={`${styles.ingredientsList} ${lora.className}`}>
                  {recipe.ingredients.map((ingredient, index) => {
                    if (typeof ingredient === 'string') {
                      return <li key={index}>{ingredient}</li>;
                    } else {
                      return (
                        <li key={index}>
                          <Link href={ingredient.link}>{ingredient.name}</Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            )}

            {recipe.instructions && (
              <div className={styles.section}>
                <h2 className={playfair.className}>Instructions</h2>
                <ol className={`${styles.instructionsList} ${lora.className}`}>
                  {recipe.instructions.map((instruction, index) => {
                    if (typeof instruction === 'string') {
                      return <li key={index}>{instruction}</li>;
                    } else {
                      return (
                        <li key={index}>
                          <strong>{instruction.step}</strong>{' '}
                          {instruction.details}
                        </li>
                      );
                    }
                  })}
                </ol>
              </div>
            )}

            {recipe.tips && (
              <div className={styles.section}>
                <h2 className={playfair.className}>Tips</h2>
                <p className={`${styles.tips} ${lora.className}`}>
                  {recipe.tips}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
