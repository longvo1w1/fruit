import { reactive, computed, watch } from 'vue'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  qty: number
}

const STORAGE_KEY = 'fruit_cart'

const state = reactive({
  items: load()
})

function load(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
}

export function useCart() {
  function addToCart(product: Omit<CartItem, 'qty'>) {
    const found = state.items.find(i => i.id === product.id)
    if (found) {
      found.qty++
    } else {
      state.items.push({ ...product, qty: 1 })
    }
  }

  function updateQty(id: number, qty: number) {
    const item = state.items.find(i => i.id === id)
    if (!item) return
    item.qty = Math.max(1, qty)
  }

  function remove(id: number) {
    const idx = state.items.findIndex(i => i.id === id)
    if (idx !== -1) state.items.splice(idx, 1)
  }

  const totalItems = computed(() =>
    state.items.reduce((s, i) => s + i.qty, 0)
  )

  const totalPrice = computed(() =>
    state.items.reduce((s, i) => s + i.qty * i.price, 0)
  )

  watch(
    () => state.items,
    save,
    { deep: true }
  )

  return {
    items: state.items,
    addToCart,
    updateQty,
    remove,
    totalItems,
    totalPrice
  }
}
