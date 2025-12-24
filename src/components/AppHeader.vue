<script setup lang="ts">
import { useI18n } from '~/i18n'
import { useCart } from '~/store/cart'
import LanguageSwitch from './LanguageSwitch.vue'
import { ref ,watch} from 'vue'

const { t } = useI18n()
const cart = useCart()
const bounce = ref(false)

watch(
  () => cart.totalItems,
  () => {
    bounce.value = true
    setTimeout(() => (bounce.value = false), 300)
  }
)
</script>

<template>
  <header class="sticky top-0 z-40
           bg-[#fbfaf7]
           border-b border-black/10">
      <!-- LEFT: LOGO -->
       <div class="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

      <!-- LEFT: LOGO -->
      <RouterLink
        to="/"
        class="flex items-center gap-3 group"
      >
        <img
          src="/images/hero.png"
          alt="Fruit Exports"
          class="h-9 w-9 object-contain"
        />

        <span
          class="font-extrabold tracking-[0.18em] text-[#134b39]
                 text-sm group-hover:opacity-80 transition"
        >
          FRUIT EXPORTS
        </span>
      </RouterLink>

      <!-- CENTER: NAV -->
      <nav class="hidden md:flex items-center gap-12
               text-sm font-semibold tracking-[0.14em]
               text-[#2f3a34]">

        <RouterLink to="/" class="relative hover:text-[#b99a5f] transition
         after:absolute after:left-0 after:-bottom-2
         after:h-[2px] after:w-0 after:bg-[#b99a5f]
         after:transition-all hover:after:w-full" exact-active-class="text-[#b99a5f] after:w-full">
          {{ t('nav.home') }}
        </RouterLink>

        <RouterLink to="/products" class="relative hover:text-[#b99a5f] transition
         after:absolute after:left-0 after:-bottom-2
         after:h-[2px] after:w-0 after:bg-[#b99a5f]
         after:transition-all hover:after:w-full" active-class="text-[#b99a5f] after:w-full">
          {{ t('nav.products') }}
        </RouterLink>
      </nav>

      <!-- RIGHT: CART + LANGUAGE -->
      <div class="flex items-center gap-6">

        <!-- CART ICON -->
        <RouterLink to="/cart" class="relative group flex items-center justify-center">

          <!-- CART ICON -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#2f3a34]
           group-hover:text-[#b99a5f]
           transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14l-1.2 12H6.2L5 8z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8V6a3 3 0 016 0v2" />
          </svg>

          <!-- BADGE -->
          <span v-if="cart.totalItems > 0" class="absolute -top-2 -right-2
           min-w-[18px] h-[18px]
           rounded-full bg-[#b99a5f]
           text-white text-[11px]
           font-bold flex items-center
           justify-center shadow">
            {{ cart.totalItems }}
          </span>
        </RouterLink>

        <!-- LANGUAGE -->
        <LanguageSwitch />
      </div>
    </div>
  </header>
</template>
