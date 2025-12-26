<script setup lang="ts">
import { ref, computed, onMounted, nextTick, onUnmounted } from 'vue'
import { useI18n } from '~/i18n'

import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import WhyItem from '~/components/WhyItem.vue'
import StatStrip from '~/components/StatStrip.vue'
import ProductCard from '~/components/ProductCard.vue'

import {
  HOME_HERO,
  HOME_STATS,
  HOME_STANDARDS,
  HOME_PRODUCTS
} from '~/constants'

const { t } = useI18n()

/**
 * API READY:
 * - Hiện tại dùng constants (mock)
 * - Sau này chỉ thay data source bằng API response
 */
const hero = computed(() => HOME_HERO)
const stats = computed(() => HOME_STATS)
const standards = computed(() => HOME_STANDARDS)
const products = computed(() => HOME_PRODUCTS)
console.log(products)

/**
 * Skeleton loading:
 * - Trong tương lai isLoading sẽ phụ thuộc fetch() thật.
 */
const isLoading = ref(false)
onMounted(() => {
  // mock loading feel (replace bằng fetch thật sau này)
  window.setTimeout(() => (isLoading.value = false), 500)
})

/**
 * Viewport reveal animation for standards cards
 */
const revealEls = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

const setupReveal = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-in')
          observer?.unobserve(e.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  revealEls.value.forEach((el) => el && observer?.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupReveal()
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <div id="top" class="bg-brand-sand text-slate-900">

    <!-- ================= HERO ================= -->
    <section class="py-12 md:py-24">
      <div class="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
            {{ t(hero.title) }}
          </h1>

          <p class="mt-5 text-slate-600 text-lg max-w-xl leading-relaxed">
            {{ t(hero.subtitle) }}
          </p>

          <!-- Primary CTA: hover lift + active scale -->
          <!-- <button
            class="mt-8 min-h-[48px] px-8 rounded-xl
                   bg-brand-gold text-white font-semibold tracking-wide
                   hover:bg-brand-goldHover hover:-translate-y-[2px]
                   active:scale-95 transition-all"
          >
            {{ t(hero.primaryCta) }}
          </button> -->
        </div>

        <div class="relative">
          <img
            :src="hero.image"
            :alt="t(hero.imageAlt)"
            loading="lazy"
            class="w-full h-[340px] md:h-[460px]
                   object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- ================= STATS ================= -->
    <section class="bg-white py-12 md:py-24">
      <div class="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatStrip
          v-for="s in stats"
          :key="s.id"
          :label="t(s.label)"
          :value="s.value"
        />
      </div>
    </section>

    <!-- ================= STANDARDS (Horizontal Snap Scroll) ================= -->
    <section id="standards" class="bg-slate-50 py-12 md:py-24">
      <div class="mx-auto max-w-7xl px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
            {{ t('home.standards.title') }}
          </h2>
          <p class="mt-4 text-slate-500 leading-relaxed">
            {{ t('home.standards.subtitle') }}
          </p>
        </div>

        <!-- Loading: skeleton -->
        <div
          v-if="isLoading"
          class="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory
                 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible"
        >
          <div
            v-for="n in 3"
            :key="n"
            class="snap-start shrink-0 w-[85%] md:w-auto
                   rounded-2xl bg-white border border-slate-100
                   p-8 animate-pulse"
          >
            <div class="h-12 w-12 rounded-xl bg-slate-100" />
            <div class="mt-6 h-5 w-2/3 bg-slate-100 rounded" />
            <div class="mt-3 h-4 w-full bg-slate-100 rounded" />
            <div class="mt-2 h-4 w-5/6 bg-slate-100 rounded" />
          </div>
        </div>

        <!-- Data -->
        <div
          v-else
          class="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory
                 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible"
        >
          <div
            v-for="(item, idx) in standards"
            :key="item.id"
            :ref="(el) => (revealEls[idx] = el as HTMLElement)"
            class="reveal-base snap-start shrink-0 w-[85%] md:w-auto relative"
          >
            <WhyItem
              :title="t(item.title)"
              :desc="t(item.description)"
              :icon="item.icon"
              :badge="t(`home.standards.badge.${item.badge}`)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PRODUCTS ================= -->
    <section id="products" class="bg-white py-12 md:py-24">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex items-end justify-between">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
            {{ t('home.products.title') }}
          </h2>

          <a
            href="/products"
            class="text-sm font-semibold text-brand-gold hover:underline"
          >
            {{ t('home.products.viewAll') }}
          </a>
        </div>

        <div v-if="isLoading" class="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="n in 3"
            :key="n"
            class="rounded-2xl border border-slate-100 bg-white overflow-hidden animate-pulse"
          >
            <div class="h-48 bg-slate-100" />
            <div class="p-5">
              <div class="h-4 w-2/3 bg-slate-100 rounded" />
              <div class="mt-3 h-4 w-1/2 bg-slate-100 rounded" />
              <div class="mt-5 h-9 w-24 bg-slate-100 rounded-lg" />
            </div>
          </div>
        </div>

        <div v-else class="mt-10 grid gap-6
             grid-cols-2
             md:grid-cols-3
             lg:grid-cols-4">
          <ProductCard
            v-for="p in products"
            :key="p.id"
            :name="t(p.name)"
            :price="t(p.price)"
            :image="p.image"
            :ctaLabel="t('common.addToCart')"
          />
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* reveal animation for standards cards */
.reveal-base {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
}
.reveal-in {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: all 700ms cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
