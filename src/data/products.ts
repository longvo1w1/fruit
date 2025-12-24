export type Product = {
  id: string
  name: string
  origin: string
  badge?: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 'durian-ri6',
    name: 'Sầu riêng Ri6',
    origin: 'Việt Nam',
    badge: 'Ready to export',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=80',
    description: 'Sầu riêng Ri6 cơm vàng, hạt lép, thơm béo.'
  },
  {
    id: 'dragon-fruit',
    name: 'Thanh long',
    origin: 'Việt Nam',
    badge: 'EU standard',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&w=1200&q=80',
    description: 'Thanh long ruột trắng/đỏ, tươi ngon, chuẩn xuất khẩu.'
  },
  {
    id: 'mango-cat-hoa-loc',
    name: 'Xoài Cát Hòa Lộc',
    origin: 'Việt Nam',
    badge: 'Best seller',
    price: 90000,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80',
    description: 'Xoài thơm ngọt, thịt dày, phù hợp xuất khẩu.'
  },
  {
    id: 'jackfruit',
    name: 'Mít',
    origin: 'Việt Nam',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1593462368019-19d1b9f4b0d4?auto=format&fit=crop&w=1200&q=80',
    description: 'Mít giòn ngọt, hương thơm tự nhiên.'
  }
]
