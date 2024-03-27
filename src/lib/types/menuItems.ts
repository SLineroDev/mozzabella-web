import type { ImageMetadata } from 'astro';

import Vegetal from '@/assets/images/vegetal.png';

export interface IMenuItem {
  title: string;
  description?: string;
  image: ImageMetadata;
}

export const mainMenuImages = {
  vegetal: Vegetal
};
