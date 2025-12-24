<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '~/store/cart'
import CartToast from '~/components/CartToast.vue'
import { useI18n } from '~/i18n'

const router = useRouter()
const cart = useCart()
const showToast = ref(false)
const { t } = useI18n()
const products = [
  {
    id: 1,
    name: "Dragon Fruit",
    price: 12.5,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dragon%20fruit%20(Pitaya).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dragon%20fruit%20(pitaya)%20on%20white%20background.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pitaya%20Fruits%20.jpg"
    ]
  },
  {
    id: 2,
    name: "Durian Premium",
    price: 25,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Durian.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%20fruit%20opened%20PJ%20DSC%200802.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%20(12593723854).jpg"
    ]
  },
  {
    id: 3,
    name: "Mango Export",
    price: 9.8,
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Himsagar%20mango%20slices.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mango%20Slice.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Yellow%20Mango%20slices.jpg"
    ]
  }
];



const slideIndex = reactive<Record<number, number>>({})
let timer: number

onMounted(() => {
  products.forEach(p => (slideIndex[p.id] = 0))
  timer = window.setInterval(() => {
    products.forEach(p => {
      slideIndex[p.id] =
        (slideIndex[p.id] + 1) % p.images.length
    })
  }, 3000)
})

onBeforeUnmount(() => clearInterval(timer))

function goDetail(id: number) {
  router.push(`/products/${id}`)
}

function add(p: any) {
  cart.addToCart({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0]
  })
  showToast.value = true
  setTimeout(() => (showToast.value = false), 1600)
}
</script>

<template>
  <div class="bg-[#f4f1ea] py-14">
    <div class="max-w-7xl mx-auto px-6">
      <h1 class="text-3xl font-extrabold mb-12">
        {{ t('products.title') }}
      </h1>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="p in products"
          :key="p.id"
          class="bg-white rounded-2xl shadow-lg
                 hover:-translate-y-1 hover:shadow-2xl
                 transition overflow-hidden">

          <!-- IMAGE SLIDER -->
          <div
            class="relative h-56 cursor-pointer overflow-hidden"
            @click="goDetail(p.id)">
            <div
              class="absolute inset-0 flex transition-transform duration-700"
              :style="{ transform: `translateX(-${slideIndex[p.id] * 100}%)` }">
              <img
                v-for="img in p.images"
                :key="img"
                :src="img"
                class="w-full h-56 object-cover shrink-0" />
            </div>

            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <span
                v-for="(_, i) in p.images"
                :key="i"
                class="w-2 h-2 rounded-full"
                :class="i === slideIndex[p.id]
                  ? 'bg-white'
                  : 'bg-white/50'" />
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-5">
            <h3 class="font-bold text-lg">
              {{ p.name }}
            </h3>

            <p class="mt-2 text-[#134b39] font-semibold">
              {{ t('products.pricePerKg', { price: p.price }) }}
            </p>

            <button
              @click.stop="add(p)"
              class="mt-4 w-full py-3 rounded-xl
                     bg-[#134b39] text-white
                     font-semibold hover:bg-[#0f3c2d]
                     transition shadow-md">
              {{ t('common.addToCart') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <CartToast :show="showToast" />
  </div>
</template>
