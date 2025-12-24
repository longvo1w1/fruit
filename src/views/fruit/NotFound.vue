<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from '~/i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div
    class="min-h-[70vh] bg-[#f4f1ea]
           flex items-center justify-center px-6">

    <div
      class="max-w-xl w-full bg-white
             rounded-3xl shadow-2xl
             p-12 text-center">

      <!-- 404 -->
      <div
        class="text-[96px] font-extrabold
               tracking-widest text-[#b99a5f]">
        404
      </div>

      <!-- TITLE -->
      <h1
        class="mt-4 text-2xl md:text-3xl
               font-extrabold text-[#1f2a24]">
        {{ t('notFound.title') }}
      </h1>

      <!-- DESC -->
      <p
        class="mt-4 text-gray-600
               leading-relaxed">
        {{ t('notFound.description') }}
      </p>

      <!-- ACTIONS -->
      <div
        class="mt-10 flex flex-col sm:flex-row
               justify-center gap-4">

        <button
          @click="router.push('/')"
          class="px-8 py-3 rounded-xl
                 bg-[#134b39] text-white
                 font-semibold tracking-wide
                 hover:bg-[#0f3c2d]
                 transition shadow-lg">
          {{ t('notFound.backHome') }}
        </button>

        <button
          @click="router.back()"
          class="px-8 py-3 rounded-xl
                 border border-gray-300
                 font-semibold
                 hover:border-[#b99a5f]
                 hover:text-[#b99a5f]
                 transition">
          {{ t('notFound.goBack') }}
        </button>
      </div>

      <!-- DECOR -->
      <div class="mt-12 text-xs text-gray-400">
        FRUIT EXPORTS · GLOBAL HARVEST
      </div>
    </div>
  </div>
</template>
