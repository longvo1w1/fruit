<template>
  <a-card title="Product">
    <!-- Product name -->
    <a-form layout="vertical">
      <a-form-item
        label="Product name"
        required
      >
        <a-input
          v-model:value="form.name"
          placeholder="Product name"
        />
      </a-form-item>

      <!-- Price -->
      <a-form-item label="Price">
        <a-input-number
          v-model:value="form.price"
          style="width:100%"
          placeholder="Price"
        />
      </a-form-item>

      <!-- Media -->
      <a-form-item label="Media">
        <MediaUploader v-model="form.medias" />
      </a-form-item>

      <!-- Actions -->
      <a-space style="margin-top:16px">
        <a-button @click="saveDraft">
          Save Draft
        </a-button>
        <a-button type="primary" @click="publish">
          Publish
        </a-button>
      </a-space>
    </a-form>

    <!-- Preview -->
    <ProductPreview
      :product="form"
      style="margin-top:24px"
    />
  </a-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import MediaUploader from '~/admin/components/MediaUploader.vue'
import ProductPreview from '~/admin/components/ProductPreview.vue'
import { createProduct } from '~/admin/services/product.service'

const router = useRouter()

const form = reactive({
  name: '',
  price: 0,
  medias: [] as any[],
  status: 'DRAFT'
})

const saveDraft = async () => {
  await createProduct({
    ...form,
    status: 'DRAFT'
  })
  router.push('/admin/products')
}

const publish = async () => {
  await createProduct({
    ...form,
    status: 'PUBLISHED'
  })
  router.push('/admin/products')
}
</script>
