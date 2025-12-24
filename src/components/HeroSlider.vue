<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-left">
        <div class="hero-slide" :style="{ backgroundImage: `url(${slides[index].image})` }">
          <div class="hero-overlay">
            <div class="hero-title">{{ t('hero.title') }}</div>
            <div class="hero-sub">{{ t('hero.subtitle') }}</div>

            <router-link class="btn btn-primary" to="/products">
              {{ t('hero.cta') }}
            </router-link>
          </div>
        </div>

        <div class="hero-dots">
          <button
            v-for="(s, i) in slides"
            :key="s.id"
            class="dot"
            :class="{ active: i === index }"
            @click="go(i)"
            aria-label="Slide dot"
          />
        </div>
      </div>

      <aside class="hero-right">
        <div class="panel">
          <div class="panel-title">FRUIT EXPORTS</div>
          <div class="panel-sub">GLOBAL HARVEST</div>

          <div class="form">
            <label class="label">{{ t('contact.office') }}</label>
            <input class="input" placeholder="Địa chỉ" />

            <div class="info">
              <div><b>{{ t('contact.hotline') }}</b>: +84 xxx xxxx</div>
              <div><b>Email</b>: info@demo.local</div>
              <div><b>Email</b>: sales@demo.local</div>
            </div>

            <input class="input" placeholder="Họ tên / organization" />
            <button class="btn btn-dark">{{ t('contact.send') }}</button>
            <input class="input" placeholder="Họ tên" />
            <input class="input" placeholder="Loại trái cây / quantity" />
            <input class="input" placeholder="Email" />

            <div class="map">
              <div class="map-box">Map Placeholder</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from '~/i18n'

const { t } = useI18n()

const slides = [
  {
    id: 's1',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 's2',
    image: 'https://images.unsplash.com/photo-1502741126161-b048400d00d4?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 's3',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80'
  }
]

const index = ref(0)
let timer: number | undefined

function next() {
  index.value = (index.value + 1) % slides.length
}
function go(i: number) {
  index.value = i
  restart()
}
function restart() {
  if (timer) window.clearInterval(timer)
  timer = window.setInterval(next, 4500)
}

onMounted(restart)
onBeforeUnmount(() => timer && window.clearInterval(timer))
</script>
