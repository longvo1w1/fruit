import { defineStore } from 'pinia'
import { adminLogin } from '~/admin/services/auth.service'

export const useAdminAuthStore = defineStore('admin-auth', {
    state: () => ({
        token: localStorage.getItem('admin_token'),
        user: null as any
    }),

    getters: {
        isLoggedIn: (s) => !!s.token
    },

    actions: {
        async login(email: string, password: string) {
            const res = await adminLogin({ email, password })
            this.token = res.accessToken
            this.user = res.user

            localStorage.setItem('admin_token', res.accessToken)
        },

        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('admin_token')
        }
    }
})
