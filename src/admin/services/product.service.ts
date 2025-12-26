import api from '~/services/api'

export const getProducts = async () => {
  const { data } = await api.get('/products')
  return data
}

export const getProduct = async (id: string) => {
  const { data } = await api.get(`/products/${id}`)
  return data
}

export const createProduct = async (payload: any) => {
  const { data } = await api.post('/products', payload)
  return data
}

export const updateProduct = async (id: string, payload: any) => {
  const { data } = await api.put(`/products/${id}`, payload)
  return data
}

export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`)
}
