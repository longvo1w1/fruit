<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '~/i18n'
import LanguageSwitch from './LanguageSwitch.vue'

const { t } = useI18n()

/* -----------------------------
 * STATE
 * ----------------------------- */
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

/* -----------------------------
 * SCROLL EFFECT
 * ----------------------------- */
const onScroll = () => {
  isScrolled.value = window.scrollY > 16
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="sticky top-0 z-50 transition-all duration-300" :class="isScrolled
    ? 'backdrop-blur-md bg-white'
    : 'bg-brand-sand'">
    <div class="mx-auto max-w-7xl px-4
             h-[56px] md:h-[60px]
             flex items-center justify-between">
      <!-- LEFT: BRAND -->
      <div class="font-extrabold tracking-wide text-sm md:text-base">
        {{ t('home.brand') }}
      </div>

      <!-- CENTER: NAV (DESKTOP) -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="/" class="pb-1 text-slate-700 hover:text-brand-gold transition-colors">
          {{ t('home.nav.home') }}
        </a>
        <a href="/products" class="pb-1 text-slate-700 hover:text-brand-gold transition-colors">
          {{ t('home.nav.products') }}
        </a>
        <a href="/contact" class="pb-1 text-slate-700 hover:text-brand-gold transition-colors">
          {{ t('home.nav.contact') }}
        </a>
      </nav>

      <!-- RIGHT: ACTIONS -->
      <div class="flex items-center gap-3">
        <!-- Cart -->
        <RouterLink to="/cart" class="h-9 w-9 rounded-lg
         flex items-center justify-center
         hover:bg-black/5
         active:scale-95
         transition-all" aria-label="Cart">
          🛒
        </RouterLink>

        <!-- Language -->
        <LanguageSwitch />

        <!-- Mobile Menu Button -->
        <button class="md:hidden h-9 w-9 rounded-lg
                 flex items-center justify-center
                 hover:bg-black/5
                 active:scale-95
                 transition-all" @click="isMobileMenuOpen = true" aria-label="Open menu">
          ☰
        </button>
      </div>
    </div>
  </header>

  <!-- ================= MOBILE MENU OVERLAY ================= -->
  <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60] bg-white">
    <div class="h-[56px] px-4 flex items-center justify-between border-b">
      <span class="font-bold">{{ t('home.brand') }}</span>
      <button class="h-9 w-9 rounded-lg
               hover:bg-black/5
               active:scale-95
               transition-all" @click="isMobileMenuOpen = false">
        ✕
      </button>
    </div>

    <nav class="px-6 py-8 flex flex-col gap-6 text-lg font-semibold">
      <a href="/" @click="isMobileMenuOpen = false">
        {{ t('home.nav.home') }}
      </a>
      <a href="/products" @click="isMobileMenuOpen = false">
        {{ t('home.nav.products') }}
      </a>
      <a href="/contact" @click="isMobileMenuOpen = false">
        {{ t('home.nav.contact') }}
      </a>
    </nav>
  </div>
</template>
