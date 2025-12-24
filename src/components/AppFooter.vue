<script setup lang="ts">
import { useI18n } from '~/i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-[#2f2f2f] text-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-16">

      <!-- GRID -->
      <div class="grid gap-10 md:grid-cols-4">

        <!-- BRAND -->
        <div>
          <h3 class="text-white font-extrabold tracking-widest mb-2">
            FRUIT EXPORTS
          </h3>
          <p class="text-sm text-gray-400 mb-4">
            {{ t('footer.tagline') }}
          </p>

          <p class="text-xs text-gray-500 leading-relaxed">
            {{ t('footer.desc') }}
          </p>
        </div>

        <!-- NAV -->
        <div>
          <h4 class="text-white font-semibold mb-4 tracking-wide">
            {{ t('footer.company') }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                to="/fruit/about"
                class="hover:text-[#b99a5f] transition">
                {{ t('footer.about') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/fruit/contact"
                class="hover:text-[#b99a5f] transition">
                {{ t('footer.contact') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/fruit/products"
                class="hover:text-[#b99a5f] transition">
                {{ t('footer.products') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- LEGAL -->
        <div>
          <h4 class="text-white font-semibold mb-4 tracking-wide">
            {{ t('footer.legal') }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                to="/fruit/privacy"
                class="hover:text-[#b99a5f] transition">
                {{ t('footer.privacy') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/fruit/terms"
                class="hover:text-[#b99a5f] transition">
                {{ t('footer.terms') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- NEWSLETTER -->
        <div>
          <h4 class="text-white font-semibold mb-4 tracking-wide">
            {{ t('footer.newsletter') }}
          </h4>

          <div class="flex">
            <input
              type="email"
              :placeholder="t('footer.emailPlaceholder')"
              class="flex-1 px-4 py-2 text-sm
                     bg-[#1f1f1f] border border-gray-600
                     focus:outline-none focus:border-[#b99a5f]" />
            <button
              class="px-4 py-2 bg-[#b99a5f] text-white text-xs
                     tracking-widest hover:bg-[#a88a52] transition">
              {{ t('footer.subscribe') }}
            </button>
          </div>
        </div>
      </div>

      <!-- DIVIDER -->
      <div class="border-t border-gray-700 mt-12 pt-6
                  flex flex-col md:flex-row
                  justify-between items-center gap-4">

        <p class="text-xs text-gray-500">
          © {{ new Date().getFullYear() }} Fruit Exports. All rights reserved.
        </p>

        <div class="flex gap-4 text-gray-400">
          <a href="#" class="hover:text-[#b99a5f] transition">Twitter</a>
          <a href="#" class="hover:text-[#b99a5f] transition">Facebook</a>
          <a href="#" class="hover:text-[#b99a5f] transition">Instagram</a>
        </div>
      </div>

    </div>
  </footer>
</template>
