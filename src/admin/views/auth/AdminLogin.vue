<template>
  <div class="login-wrapper">
    <a-card title="Admin Login" class="login-card">
      <a-form
        layout="vertical"
        :model="form"
        @finish="onSubmit"
      >
        <a-form-item
          label="Email"
          name="email"
          :rules="[
            { required: true, message: 'Email is required' },
            { type: 'email', message: 'Invalid email' }
          ]"
        >
          <a-input v-model:value="form.email" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[
            { required: true, message: 'Password is required' }
          ]"
        >
          <a-input-password v-model:value="form.password" />
        </a-form-item>

        <a-button
          type="primary"
          html-type="submit"
          block
          :loading="loading"
        >
          Login
        </a-button>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useAdminAuthStore } from '~/admin/store/adminAuth'

const router = useRouter()
const auth = useAdminAuthStore()
const loading = ref(false)

const form = reactive({
  email: '',
  password: ''
})

const onSubmit = async () => {
  try {
    loading.value = true
    await auth.login(form.email, form.password)
    message.success('Login success')
    router.replace('/admin')
  } catch (e) {
    message.error('Invalid credentials')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 360px;
}
</style>
