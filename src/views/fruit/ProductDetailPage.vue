<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '~/i18n'
import { useCart } from '~/store/cart'
import CartToast from '~/components/CartToast.vue'

const { t } = useI18n()
const cart = useCart()

const showToast = ref(false)

const product = {
  id: 1,
  name: "Premium Dragon Fruit",
  price: 12.5,
  rating: 4.6,
  reviewsCount: 128,
  description:
    "Our premium dragon fruit is harvested at peak ripeness, ensuring sweetness, freshness, and international export standards.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Dragon_fruit_%28Pa150231%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Dragon_fruit_%28Pitaya%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Pitaya_cross_section_ed2.jpg"
  ],
  video:
    "https://upload.wikimedia.org/wikipedia/commons/f/f7/Delicious_Dragon_Fruit_Halwa_Making_-_Halwa_recipe.webm"
};


const reviews = [
  {
    id: 1,
    name: 'Michael R.',
    rating: 5,
    comment: 'Extremely fresh and well-packed. Will order again!',
    date: '2024-11-02'
  },
  {
    id: 2,
    name: 'Anna T.',
    rating: 4,
    comment: 'Great quality, delivery was fast.',
    date: '2024-10-21'
  }
]

const activeMedia = ref(product.images[0])

/** ADD TO CART */
function addToCart() {
  cart.addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0]
  })

  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 1600)
}
</script>
<template>
  <div class="bg-[#f4f1ea] py-12">
    <div class="max-w-7xl mx-auto px-6">

      <!-- GRID -->
      <div class="grid lg:grid-cols-2 gap-12">

        <!-- MEDIA -->
        <div>
          <!-- MAIN MEDIA -->
          <div
            class="rounded-2xl overflow-hidden shadow-xl bg-black mb-4
                   transition-transform duration-300 hover:scale-[1.01]">
            <img
              v-if="!activeMedia.endsWith('.mp4')"
              :src="activeMedia"
              class="w-full h-[420px] object-cover"
            />
            <video
              v-else
              controls
              class="w-full h-[420px] object-cover">
              <source :src="activeMedia" type="video/mp4" />
            </video>
          </div>

          <!-- THUMBNAILS -->
          <div class="flex gap-4">
            <img
              v-for="img in product.images"
              :key="img"
              :src="img"
              @click="activeMedia = img"
              class="w-24 h-20 object-cover rounded-xl cursor-pointer
                     border-2 transition hover:scale-105"
              :class="activeMedia === img
                ? 'border-[#b99a5f]'
                : 'border-transparent'"
            />

            <!-- VIDEO THUMB -->
            <div
              @click="activeMedia = product.video"
              class="w-24 h-20 rounded-xl cursor-pointer
                     flex items-center justify-center
                     bg-black text-white text-xs font-semibold
                     hover:scale-105 transition"
              :class="activeMedia === product.video
                ? 'ring-2 ring-[#b99a5f]'
                : ''">
              ▶ {{ t('productDetail.video') }}
            </div>
          </div>
        </div>

        <!-- INFO -->
        <div>
          <h1 class="text-3xl font-extrabold tracking-tight text-[#1f2a24]">
            {{ product.name }}
          </h1>

          <!-- RATING -->
          <div class="flex items-center gap-3 mt-3">
            <div class="flex">
              <span
                v-for="i in 5"
                :key="i"
                class="text-lg"
                :class="i <= Math.round(product.rating)
                  ? 'text-yellow-500'
                  : 'text-gray-300'">
                ★
              </span>
            </div>
            <span class="text-sm text-gray-600">
              {{ product.rating }}
              ({{ t('productDetail.reviews', { count: product.reviewsCount }) }})
            </span>
          </div>

          <!-- PRICE -->
          <div class="mt-6 text-2xl font-bold text-[#134b39]">
            {{ t('products.pricePerKg', { price: product.price.toFixed(2) }) }}
          </div>

          <!-- DESC -->
          <p class="mt-6 text-gray-700 leading-relaxed">
            {{ product.description }}
          </p>

          <!-- ACTION -->
          <div class="mt-8 flex gap-4">
            <button
              @click="addToCart"
              class="px-8 py-3 rounded-xl bg-[#134b39]
                     text-white font-semibold
                     hover:bg-[#0f3c2d]
                     transition shadow-lg">
              {{ t('common.addToCart') }}
            </button>

            <button
              class="px-8 py-3 rounded-xl border border-gray-300
                     hover:border-[#b99a5f]
                     transition font-semibold">
              {{ t('common.contactSupplier') }}
            </button>
          </div>
        </div>
      </div>

      <!-- REVIEWS -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">
          {{ t('productDetail.customerReviews') }}
        </h2>

        <div class="space-y-6">
          <div
            v-for="r in reviews"
            :key="r.id"
            class="bg-white rounded-2xl p-6 shadow-md">
            <div class="flex justify-between items-center mb-2">
              <span class="font-semibold">{{ r.name }}</span>
              <span class="text-sm text-gray-500">{{ r.date }}</span>
            </div>

            <div class="flex mb-2">
              <span
                v-for="i in 5"
                :key="i"
                class="text-sm"
                :class="i <= r.rating
                  ? 'text-yellow-500'
                  : 'text-gray-300'">
                ★
              </span>
            </div>

            <p class="text-gray-700">
              {{ r.comment }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <CartToast :show="showToast" />
</template>
