<template>
  <a-card title="Products">
    <a-button
      type="primary"
      style="margin-bottom:16px"
      @click="goCreate"
    >
      Create Product
    </a-button>

    <a-table
      :dataSource="products"
      rowKey="_id"
      :loading="loading"
    >
      <a-table-column title="Name">
        <template #default="{ record }">
          {{ record.name?.en }}
        </template>
      </a-table-column>

      <a-table-column title="Price">
        <template #default="{ record }">
          {{ record.price }}
        </template>
      </a-table-column>

      <a-table-column title="Status">
        <template #default="{ record }">
          <a-tag :color="record.status === 'PUBLISHED' ? 'green' : 'orange'">
            {{ record.status }}
          </a-tag>
        </template>
      </a-table-column>

      <a-table-column title="Action">
        <template #default="{ record }">
          <a-space>
            <a-button @click="edit(record._id)">Edit</a-button>
            <a-button danger @click="remove(record._id)">Delete</a-button>
          </a-space>
        </template>
      </a-table-column>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getProducts, deleteProduct } from '~/admin/services/product.service'

const router = useRouter()
const products = ref([])
const loading = ref(false)

const load = async () => {
  loading.value = true
  products.value = await getProducts()
  loading.value = false
}

onMounted(load)

const goCreate = () => router.push('/admin/products/create')
const edit = (id: string) =>
  router.push(`/admin/products/${id}/edit`)

const remove = async (id: string) => {
  await deleteProduct(id)
  load()
}
</script>
