<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider collapsible>
      <div class="logo">ADMIN</div>
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="dashboard" @click="go('/admin')">
          Dashboard
        </a-menu-item>
        <a-menu-item key="products" @click="go('/admin/products')">
          Products
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background:#fff;padding:0 16px">
        Admin Panel
      </a-layout-header>

      <a-layout-content style="margin:16px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const go = (path: string) => router.push(path)
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  color: white;
  font-weight: bold;
}
</style>
