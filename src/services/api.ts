export type CreateOrderPayload = {
  customer: {
    name: string
    phone: string
    email?: string
    address: string
    note?: string
  }
  items: Array<{ productId: string; qty: number; price: number }>
  subtotal: number
  currency: 'VND'
}

export type CreateOrderResponse = {
  orderId: string
  status: 'PAID' | 'PENDING' | 'FAILED'
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
  // Nếu chưa có backend, bạn có thể tạm trả mock:
  if (!BASE_URL) {
    await new Promise((r) => setTimeout(r, 700))
    return { orderId: 'MOCK-' + Math.random().toString(16).slice(2), status: 'PAID' }
  }

  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    throw new Error(`createOrder failed: ${res.status}`)
  }

  return res.json()
}
