import api from '~/services/api'

export const adminLogin = (payload: {
  email: string
  password: string
}) => {
  return api.post('/auth/login', payload)
}