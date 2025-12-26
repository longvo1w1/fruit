// src/constants/index.js

export const HOME_NAV = [
    { id: 'home', label: 'home.nav.home', href: '#top' },
    { id: 'products', label: 'home.nav.products', href: '#products' },
    { id: 'standards', label: 'home.nav.standards', href: '#standards' },
    { id: 'contact', label: 'home.nav.contact', href: '#footer' }
]

export const HOME_HERO = {
    title: 'home.hero.title',
    subtitle: 'home.hero.subtitle',
    primaryCta: '',
    imageAlt: 'home.hero.imageAlt',
    image: '/images/banner.png'
}

export const HOME_STATS = [
    { id: 'export', label: 'home.stats.export', value: '30+' },
    { id: 'partners', label: 'home.stats.partners', value: '120+' },
    { id: 'quality', label: 'home.stats.quality', value: '100%' },
    { id: 'delivery', label: 'home.stats.delivery', value: '24/7' }
]

export const HOME_STANDARDS = [
    {
        id: 'fresh',
        title: 'home.standards.items.fresh.title',
        description: 'home.standards.items.fresh.desc',
        icon: 'leaf',
        badge: 'verified'
    },
    {
        id: 'export',
        title: 'home.standards.items.export.title',
        description: 'home.standards.items.export.desc',
        icon: 'globe',
        badge: 'standard'
    },
    {
        id: 'quality',
        title: 'home.standards.items.quality.title',
        description: 'home.standards.items.quality.desc',
        icon: 'shield-check',
        badge: 'verified'
    }
]

export const HOME_PRODUCTS = [
    { id: 1, name: 'MANGOES', price: '$10', image: '/images/cat-mango.png' },
    { id: 2, name: 'LYCHEES', price: '$8', image: '/images/cat-lychee.png' },
    { id: 3, name: 'DURIAN', price: '$15', image: '/images/cat-durian.png' },
    { id: 4, name: 'DRAGON FRUIT', price: '$12', image: '/images/cat-dragon.png' }
]

export const HOME_FOOTER = {
    brand: 'home.brand',
    desc: 'footer.desc',
    linksTitle: 'footer.links.title',
    links: [
        { id: 'products', label: 'footer.links.products', href: '#products' },
        { id: 'standards', label: 'footer.links.standards', href: '#standards' },
        { id: 'contact', label: 'footer.links.contact', href: '#footer' }
    ]
}
