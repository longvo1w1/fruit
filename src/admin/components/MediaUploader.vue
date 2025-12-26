<template>
  <a-upload
    list-type="picture-card"
    :customRequest="upload"
  >
    <div>Upload</div>
  </a-upload>
</template>

<script setup lang="ts">
import { uploadMedia } from '~/admin/services/media.service'

const emit = defineEmits(['update:modelValue'])

const upload = async ({ file, onSuccess }: any) => {
  const res = await uploadMedia(file)
  emit('update:modelValue', [res])
  onSuccess(res)
}
</script>
