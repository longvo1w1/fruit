<script setup lang="ts">
import { useI18n } from '~/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="bg-[#f4f1ea]">

    <!-- HERO -->
    <section class="relative h-[360px]">
      <img
      
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 h-full flex items-center">
        <div class="max-w-6xl mx-auto px-6">
          <h1 class="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
            {{ t('about.hero.title') }}
          </h1>
          <p class="mt-4 text-gray-200 max-w-2xl leading-relaxed">
            {{ t('about.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 class="text-2xl font-bold mb-6 text-[#1f2a24]">
            {{ t('about.intro.title') }}
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            {{ t('about.intro.p1') }}
          </p>

          <p class="text-gray-700 leading-relaxed">
            {{ t('about.intro.p2') }}
          </p>
        </div>

        <img
          class="rounded-2xl shadow-xl"
        />
      </div>
    </section>

    <!-- STATS -->
    <section class="bg-[#f7f5ef] py-20">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>
          <p class="text-4xl font-extrabold text-[#134b39]">20+</p>
          <p class="mt-2 text-sm tracking-widest text-gray-600">
            {{ t('about.stats.countries') }}
          </p>
        </div>

        <div>
          <p class="text-4xl font-extrabold text-[#134b39]">500+</p>
          <p class="mt-2 text-sm tracking-widest text-gray-600">
            {{ t('about.stats.farms') }}
          </p>
        </div>

        <div>
          <p class="text-4xl font-extrabold text-[#134b39]">10K+</p>
          <p class="mt-2 text-sm tracking-widest text-gray-600">
            {{ t('about.stats.orders') }}
          </p>
        </div>

        <div>
          <p class="text-4xl font-extrabold text-[#134b39]">100%</p>
          <p class="mt-2 text-sm tracking-widest text-gray-600">
            {{ t('about.stats.quality') }}
          </p>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-2xl font-bold mb-16">
          {{ t('about.values.title') }}
        </h2>

        <div class="grid md:grid-cols-3 gap-12">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="font-bold mb-3">
              {{ t('about.values.quality.title') }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ t('about.values.quality.desc') }}
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="font-bold mb-3">
              {{ t('about.values.sustain.title') }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ t('about.values.sustain.desc') }}
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="font-bold mb-3">
              {{ t('about.values.partner.title') }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ t('about.values.partner.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
