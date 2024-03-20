/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  description: 'Mozzabella | Pizzeria Italiana para toda la familia',
  themeColor: '#d23729',
  type: 'website',
  image: {
    url: '/img/og.png',
    alt: 'Mozzabella',
    width: 705,
    height: 606
  },
  siteName: 'Mozzabella',
  keywords: '',
  twitter: {
    card: 'summary_large_image'
  }
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
  name: 'Mozzabella',
  short_name: 'Mozzabella',
  description: 'Mozzabella | Pizzeria Italiana para toda la familia',
  theme_color: '#d23729',
  background_color: '#f7f6ef',
  display: 'fullscreen',
  icons: [
    {
      src: '/img/icons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/img/icons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    },
    {
      src: '/img/icons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
};
