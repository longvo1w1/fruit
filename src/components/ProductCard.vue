<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductCard from '~/components/fruit/ProductCard.vue'
import { products } from '~/data/products'

const { t } = useI18n()
</script>

<template>
  <section class="container py-16">
    <h1 class="text-3xl font-extrabold mb-10">
      {{ t('products.title') }}
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>
  </section>
</template>
