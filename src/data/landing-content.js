// src/content/landing-content.js

export const landingContent = {
  nav: [
    { key: 'products', label: 'home.nav.products' },
    { key: 'about', label: 'home.nav.about' },
    { key: 'contact', label: 'home.nav.contact' }
  ],

  hero: {
    image: '/images/banner.png',
  },

  features: [
    {
      key: 'fresh',
      icon: '🍃',
      title: 'home.features.items.fresh.title',
      desc: 'home.features.items.fresh.desc'
    },
    {
      key: 'export',
      icon: '🚢',
      title: 'home.features.items.export.title',
      desc: 'home.features.items.export.desc'
    },
    {
      key: 'quality',
      icon: '🏆',
      title: 'home.features.items.quality.title',
      desc: 'home.features.items.quality.desc'
    }
  ],

  partners: [
    'GLOBAL MARKET',
    'ASIA EXPORT',
    'EU ORGANIC',
    'PREMIUM FOOD',
    'FRESH HUB'
  ],

  finalCta: {}
}
