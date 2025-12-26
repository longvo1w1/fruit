
<template>
  <a-card title="Preview">
    <img v-if="img" :src="img" style="width:100%" />
    <h3>{{product.name}}</h3>
    <p>{{product.description}}</p>
    <strong>{{product.price}}</strong>
  </a-card>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{product:any}>()
const img = computed(()=>props.product.medias[0]?.url)
</script>
