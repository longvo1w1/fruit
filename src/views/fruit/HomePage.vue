<script setup lang="ts">
import { useI18n } from '~/i18n'
import { heroData, categories, whyChooseUs } from '~/data/home'

import CategoryItem from '~/components/CategoryItem.vue'
import WhyItem from '~/components/WhyItem.vue'

const { t } = useI18n()
</script>

<template>
  <!-- HERO -->
  <section class="relative bg-[#f4f1ea]">
    <div class="relative">
      <img :src="'images/banner.png'" class="w-full h-[520px] object-cover" />

      <!-- overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- content -->
      <div class="absolute inset-0 flex items-center">
        <div class="max-w-6xl mx-auto px-6">
          <h1 class="text-white text-4xl md:text-5xl font-extrabold
                   leading-tight max-w-3xl whitespace-pre-line">
            {{ t('home.hero.title') }}
          </h1>

          <RouterLink to="/products" class="inline-block mt-8 px-8 py-3 rounded
         bg-[#b99a5f] text-white text-sm font-semibold
         tracking-widest hover:bg-[#a88a52]
         transition">
            {{ t('home.hero.cta') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED CATEGORIES -->
  <section class="bg-[#f4f1ea] py-20">
    <div class="max-w-6xl mx-auto text-center px-6">
      <p class="text-xs tracking-widest text-gray-600 mb-12">
        {{ t('home.sections.featuredCategories') }}
      </p>

      <div class="flex justify-center gap-12 flex-wrap">
        <CategoryItem v-for="c in categories" :key="c.id" :name="c.name" :image="c.image" />
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->
  <section class="bg-[#f7f5ef] py-24">
    <div class="max-w-5xl mx-auto text-center px-6">
      <h2 class="text-sm tracking-widest text-gray-700 mb-16">
        {{ t('home.sections.whyChooseUs') }}
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-y-16">
        <WhyItem v-for="w in whyChooseUs" :key="w.id" :icon="w.icon" :label="w.label" />
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL -->
  <section class="bg-[#f4f1ea] py-24">
    <div class="max-w-xl mx-auto text-center px-6">
      <p class="text-xs tracking-widest text-gray-600 mb-8">
        {{ t('home.sections.testimonials') }}
      </p>

      <p class="italic text-gray-700 leading-relaxed">
        {{ t('home.testimonial.content') }}
      </p>

      <div class="flex justify-center gap-2 mt-8">
        <span class="w-2 h-2 rounded-full bg-gray-400"></span>
        <span class="w-2 h-2 rounded-full bg-[#b99a5f]"></span>
        <span class="w-2 h-2 rounded-full bg-gray-400"></span>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="bg-[#3a3a3a] py-20">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h3 class="text-white text-sm tracking-widest mb-8">
        {{ t('home.sections.newsletter') }}
      </h3>

      <div class="flex justify-center gap-2 max-w-md mx-auto">
        <input type="email" :placeholder="t('home.newsletter.placeholder')"
          class="flex-1 px-4 py-2 text-sm outline-none" />
        <button class="px-6 py-2 bg-[#b99a5f]
                 text-white text-xs tracking-widest">
          {{ t('home.newsletter.button') }}
        </button>
      </div>
    </div>
  </section>
</template>
