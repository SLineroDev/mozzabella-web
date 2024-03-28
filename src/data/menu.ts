import type { Categories, IMenuItem } from '@/lib/types/menuItems';

import { mainMenuImages } from '@/lib/types/menuItems';

export const menu: { [key in Categories]: IMenuItem[] } = {
  Pizzas: [
    {
      title: 'Vegetal',
      description: 'Salsa de tomate, queso, orégano, tomátes cherrys, peperoni y rúcula',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Vegetal',
      description: 'Salsa de tomate, queso, orégano, tomátes cherrys, peperoni y rúcula',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Vegetal',
      description: 'Salsa de tomate, queso, orégano, tomátes cherrys, peperoni y rúcula',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Vegetal',
      description: 'Salsa de tomate, queso, orégano, tomátes cherrys, peperoni y rúcula',
      image: mainMenuImages.vegetal
    }
  ],
  Ensaladas: [
    {
      title: 'César',
      description: 'Lechuga, pollo, croutones, queso parmesano y salsa césar',
      image: mainMenuImages.vegetal
    },
    {
      title: 'César',
      description: 'Lechuga, pollo, croutones, queso parmesano y salsa césar',
      image: mainMenuImages.vegetal
    },
    {
      title: 'César',
      description: 'Lechuga, pollo, croutones, queso parmesano y salsa césar',
      image: mainMenuImages.vegetal
    },
    {
      title: 'César',
      description: 'Lechuga, pollo, croutones, queso parmesano y salsa césar',
      image: mainMenuImages.vegetal
    }
  ],
  Complementos: [
    {
      title: 'Papas fritas',
      description: 'Papas fritas con sal y pimienta',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Papas fritas',
      description: 'Papas fritas con sal y pimienta',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Papas fritas',
      description: 'Papas fritas con sal y pimienta',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Papas fritas',
      description: 'Papas fritas con sal y pimienta',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Papas fritas',
      description: 'Papas fritas con sal y pimienta',
      image: mainMenuImages.vegetal
    }
  ],
  Postres: [
    {
      title: 'Tiramisú',
      description: 'Tiramisú casero con cacao',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Tiramisú',
      description: 'Tiramisú casero con cacao',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Tiramisú',
      description: 'Tiramisú casero con cacao',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Tiramisú',
      description: 'Tiramisú casero con cacao',
      image: mainMenuImages.vegetal
    }
  ],
  Bebidas: [
    {
      title: 'Coca Cola',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Coca Cola',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Coca Cola',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Coca Cola',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Coca Cola',
      image: mainMenuImages.vegetal
    },
    {
      title: 'Coca Cola',
      image: mainMenuImages.vegetal
    }
  ]
};
