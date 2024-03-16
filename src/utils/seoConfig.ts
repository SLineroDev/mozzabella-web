/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: 'https://__CHANGE__/', // Production URL.
  description: '__CHANGE__',
  themeColor: '#D23729', //__CHANGE__
  type: 'website',
  image: {
    url: '/img/og.png',
    alt: '__CHANGE__',
    width: 705,
    height: 606
  },
  siteName: '__CHANGE__',
  keywords: '',
  twitter: {
    card: 'summary_large_image'
  }
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
  name: '__CHANGE__',
  short_name: '__CHANGE__',
  description: '__CHANGE__',
  theme_color: '#D23729', //__CHANGE__
  background_color: '#D23729', //__CHANGE__
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
