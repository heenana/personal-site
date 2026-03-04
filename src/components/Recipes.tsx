'use client';

import styles from './Recipes.module.css';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { recipes } from '@/data/recipes/index';
import { useState, useMemo, FC } from 'react';
import CustomSelect from '@/components/CustomSelect';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const featured = recipes.filter((recipe) => recipe.featured);

const Recipes: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get all unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    recipes.forEach((recipe) => {
      recipe.category?.forEach((cat) => cats.add(cat));
    });
    return ['all', ...Array.from(cats).sort((a, b) => a.localeCompare(b))];
  }, []);

  // Filter recipes by selected category
  const filteredRecipes = useMemo(() => {
    if (selectedCategory === 'all') return recipes;
    return recipes.filter((recipe) =>
      recipe.category?.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={playfair.className}>Recipes</h1>

        <section className={styles.section}>
          <h2 className={playfair.className}>Featured</h2>
          <div className={styles.featuredGrid}>
            {featured.slice(0, 3).map(({ id, name, photo }) => (
              <a
                key={`${id}-featured`}
                className={styles.featuredCard}
                href={`/recipes/${encodeURIComponent(id)}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    fill
                    priority
                    alt={name}
                    sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
                    src={photo}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.recipeName}>{name}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={playfair.className}>All Recipes</h2>
            <CustomSelect
              label="Filter:"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
          <div className={styles.allRecipesGrid}>
            {filteredRecipes.map(({ id, name, photo }) => (
              <Link
                key={id}
                className={styles.recipeCard}
                href={`/recipes/${encodeURIComponent(id)}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    fill
                    alt={name}
                    sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 25vw"
                    src={photo}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.recipeName}>{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Recipes;
