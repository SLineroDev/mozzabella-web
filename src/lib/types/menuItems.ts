import type { ImageMetadata } from 'astro';

import Vegetal from '@/assets/images/vegetal.png';

export interface IMenuItem {
  title: string;
  description?: string;
  image: ImageMetadata;
}

export type Categories = 'Pizzas' | 'Ensaladas' | 'Complementos' | 'Postres' | 'Bebidas';

export const mainMenuImages = {
  vegetal: Vegetal
};
